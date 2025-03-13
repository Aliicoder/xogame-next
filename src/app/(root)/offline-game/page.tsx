"use client"
import NoWinner from "@/components/NoWinner"
import OfflineBoard from "@/components/OfflineBoard"
import Winner from "@/components/Winner"
import useTurner from "@/hooks/useTurner"
import { checkForWinner } from "@/utils/helpers"
import Link from "next/link"
import React from "react"
import { IoMdReturnLeft } from "react-icons/io"

const page = () => {
  const { turns, gameBoard, addNewTurn, reset } = useTurner()
  let winner: string | null = checkForWinner(gameBoard)
  return (
    <div className="relative  h-screen w-screen">
      {winner && <Winner winner={winner} handleReset={reset} />}
      {turns.length == 9 && <NoWinner handleReset={reset} />}
      <OfflineBoard gameBoard={gameBoard} addNewTurn={addNewTurn} />
    </div>
  )
}

export default page
