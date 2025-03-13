"use client"
import { initialGame } from "@/constants/INITIAL_GAME"
import { IGameBoard, IROw, ITurn } from "@/types"
import { useState } from "react"
import { toast } from "react-toastify"

export default () => {
  const [gameBoard, setGameBoard] = useState<IGameBoard>([
    ...initialGame.map((array: IROw) => [...array]),
  ])
  const [turns, setTurns] = useState<ITurn[]>([])
  const addNewTurn = (i: number, j: number) => {
    if (gameBoard[i][j]) return
    const nextPlayer =
      turns.length > 0 && turns[0].activePlayer === "x" ? "x" : "o"
    toast(`${nextPlayer} turn`)
    setTurns((prevTurns) => {
      const activePlayer =
        prevTurns.length > 0 && prevTurns[0].activePlayer === "x" ? "o" : "x"
      const newTurns = [{ activePlayer, block: { i, j } }, ...prevTurns]
      const newGameBoard = gameBoard.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          rowIndex === i && colIndex === j ? activePlayer : cell
        )
      )
      setGameBoard(newGameBoard)
      return newTurns
    })
  }
  const reset = () => {
    setGameBoard([...initialGame.map((array: IROw) => [...array])])
    setTurns([])
  }
  return { turns, gameBoard, setTurns, addNewTurn, reset }
}
