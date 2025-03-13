"use client"
import { useEffect } from "react"
import { IGameBoard, ITurn } from "@/types"
import { notify } from "@/utils/helpers"
import client from "@/utils/ably"

interface IUseSocket {
  roomId: string | undefined
  gameBoard: IGameBoard
  turns: ITurn[]
  setGameBoard: React.Dispatch<React.SetStateAction<(string | null)[][]>>
  setLock: React.Dispatch<React.SetStateAction<boolean>>
  setTurns: React.Dispatch<React.SetStateAction<ITurn[]>>
}

export default function useSocket({
  roomId,
  gameBoard,
  setGameBoard,
  setLock,
  setTurns,
}: IUseSocket) {
  useEffect(() => {
    if (!roomId) return

    const channel = client.channels.get(`xo-game-${roomId}`)

    // Listen for opponent turns
    channel.subscribe("opponent-turn", (message) => {
      if (client.auth.clientId === message.data.clientId) {
        console.log("Ignoring own message:", message.clientId)
        return
      }
      console.log("Received move:", message.data)
      notify()
      setLock(false)
      setTurns(message.data.turns)

      const newGameBoard = gameBoard.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const turn = message.data.turns.find(
            (t: ITurn) => t.block.i === rowIndex && t.block.j === colIndex
          )
          return turn ? turn.activePlayer : cell
        })
      )

      setGameBoard(newGameBoard)
    })

    return () => {
      console.log("Unsubscribing from", `xo-game-${roomId}`)
      channel.unsubscribe()
    }
  }, [roomId, setGameBoard, setLock, setTurns])
}
