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
    <div className="relative grid h-screen w-screen">
      <Link
        className="absolute flex items-center gap-3 m-10 px-3 py-2 rounded-md  text-red-500 bg-[#303030]
            hover:outline hover:pl-4 transition-all"
        href={"/"}
      >
        <IoMdReturnLeft />
        leave
      </Link>
      {winner && <Winner winner={winner} handleReset={reset} />}
      {turns.length == 9 && <NoWinner handleReset={reset} />}

      <OfflineBoard gameBoard={gameBoard} addNewTurn={addNewTurn} />
    </div>
  )
}

export default page
