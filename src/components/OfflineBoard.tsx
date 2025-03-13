import { IGameBoard } from "@/types"
import Link from "next/link"
import { IoMdReturnLeft } from "react-icons/io"

interface OfflineBoardProps {
  gameBoard: IGameBoard
  addNewTurn: (i: number, j: number) => void
}
const OfflineBoard = ({ gameBoard, addNewTurn }: OfflineBoardProps) => {
  return (
    <div className=" h-full flex flex-col justify-between  items-center ">
      <div className="w-full h-fit flex justify-start">
        <Link
          className="w-fit relative z-10 flex items-center gap-3 m-10 px-3 py-2 rounded-md  text-red-500 bg-[#303030]
            hover:outline hover:pl-4 transition-all"
          href={"/"}
        >
          <IoMdReturnLeft />
          leave
        </Link>
      </div>
      <div className="text-white  text-4xl outline outline-black">
        {gameBoard.map((row, i) => (
          <ul className="flex" key={i}>
            {row.map((column, j) => (
              <button
                disabled={column ? true : false}
                onClick={() => addNewTurn(i, j)}
                className="flex justify-center items-center w-20 h-20 outline outline-[#303030] outline-1 "
                key={j}
              >
                {column}
              </button>
            ))}
          </ul>
        ))}
      </div>
      <div />
    </div>
  )
}

export default OfflineBoard
