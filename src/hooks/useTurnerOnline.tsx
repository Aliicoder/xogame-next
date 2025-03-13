"use client"
import { initialGame } from "@/constants/INITIAL_GAME"
import { IGameBoard, IROw, ITurn } from "@/types"
import client from "@/utils/ably"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

interface ITurner {
  roomId: string | undefined
  setTurns: React.Dispatch<React.SetStateAction<ITurn[]>>
  setLock: React.Dispatch<React.SetStateAction<boolean>>
}

export default function useTurnerOnline({
  roomId,
  setTurns,
  setLock,
}: ITurner) {
  const [gameBoard, setGameBoard] = useState<IGameBoard>(
    initialGame.map((row: IROw) => [...row])
  )

  const addNewTurn = (i: number, j: number) => {
    if (gameBoard[i][j]) return
    setTurns((prevTurns) => {
      const activePlayer = prevTurns.length % 2 === 0 ? "x" : "o"
      const newTurns = [{ activePlayer, block: { i, j } }, ...prevTurns]
      const newGameBoard = gameBoard.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          rowIndex === i && colIndex === j ? activePlayer : cell
        )
      )
      setGameBoard(newGameBoard)
      const channel = client.channels.get(`xo-game-${roomId}`)
      channel.publish("opponent-turn", {
        roomId,
        clientId: client.auth.clientId,
        turns: newTurns,
      })
      console.log(client.auth.clientId, client.clientId)
      return newTurns
    })

    setLock(true)
  }

  const reset = () => {
    setGameBoard(initialGame.map((row: IROw) => [...row]))
    setTurns([])
  }

  return { gameBoard, setGameBoard, addNewTurn, reset }
}
