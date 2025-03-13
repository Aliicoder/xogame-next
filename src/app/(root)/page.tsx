import Link from "next/link"
import React from "react"
import { RiBaseStationLine } from "react-icons/ri"
const page = () => {
  const gameId = crypto.randomUUID()
  return (
    <div className="grid w-[100vw] h-[100vh] ">
      <div className="flex flex-col place-self-center">
        <div>1.0.9</div>
        <div>
          <img src={"/assets/tic-tac-toe.png"} alt="" />
        </div>
        <div className="flex flex-col">
          <Link
            className="bg-[#303030] hover:outline hover:pl-4 transition-all text-red-500 rounded-md py-3 px-2 m-2"
            href="offline-game"
          >
            offline mode
          </Link>
          <Link
            className=" flex justify-between items-center py-3 px-2 m-2 rounded-md  bg-[#303030] text-sky-500 
            hover:outline hover:pl-4 transition-all "
            href={`online-game/${gameId}`}
          >
            online mode
            <RiBaseStationLine className="mr-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
