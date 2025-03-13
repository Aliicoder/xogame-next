"use client"
import { IoMdReturnLeft } from "react-icons/io"
import NoWinner from "@/components/NoWinner"
import OnlineBoard from "@/components/OnlineBoard"
import Winner from "@/components/Winner"
import useSocket from "@/hooks/useSocket"
import useTurnerOnline from "@/hooks/useTurnerOnline"
import { ITurn } from "@/types"
import { checkForWinner } from "@/utils/helpers"
import Link from "next/link"
import { useParams } from "next/navigation"
import React, { useState } from "react"

const Page = () => {
  const { roomId } = useParams() as { roomId?: string }
  if (!roomId) return <p>Loading...</p>
  const [lock, setLock] = useState<boolean>(false)
  const [turns, setTurns] = useState<ITurn[]>([])

  const { gameBoard, setGameBoard, addNewTurn, reset } = useTurnerOnline({
    roomId,
    setTurns,
    setLock,
  })

  useSocket({
    roomId,
    turns,
    gameBoard,
    setGameBoard,
    setLock,
    setTurns,
  })

  let winner = checkForWinner(gameBoard)

  return (
    <div className="grid w-svw h-svh">
      <Link
        className="absolute flex items-center  gap-3  m-10 px-3 py-2 rounded-md  text-red-500 bg-[#303030]
            hover:outline hover:pl-4 transition-all"
        href={"/"}
      >
        <IoMdReturnLeft />
        leave
      </Link>
      {winner && <Winner winner={winner} handleReset={reset} />}
      {turns.length === 9 && !winner && <NoWinner handleReset={reset} />}
      <OnlineBoard
        lock={lock}
        roomId={roomId}
        gameBoard={gameBoard}
        addNewTurn={addNewTurn}
      />
    </div>
  )
}

export default Page
