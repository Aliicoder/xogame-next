import Link from "next/link"
import { TbCopyCheckFilled } from "react-icons/tb"
import { IoLogoWhatsapp } from "react-icons/io"
import { OnlineBoardProps } from "@/types"
import { handleCopyLink, handleWhatsAppShare } from "@/utils/helpers"
const OnlineBoard = ({ gameBoard, addNewTurn, lock }: OnlineBoardProps) => {
  const connections = 0
  return (
    <>
      <div
        className={`place-self-center flex flex-col items-center ${
          lock ? "pointer-events-none" : ""
        }`}
      >
        <div
          className={`text-white gameBoard text-4xl outline outline-black ${
            lock && `pointer-events-none`
          }`}
        >
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
        <button
          onClick={handleWhatsAppShare}
          className="flex justify-between items-center w-full m-10 mb-5 px-3 py-2 rounded-md  text-green-500 bg-[#303030]
            hover:outline hover:pl-4 transition-all"
        >
          share invitation
          <IoLogoWhatsapp />
        </button>
        <button
          onClick={handleCopyLink}
          className="flex justify-between items-center w-full m-10 mt-0 px-3 py-2 rounded-md  text-blue-500 bg-[#303030]
            hover:outline hover:pl-4 transition-all"
        >
          copy link <TbCopyCheckFilled />
        </button>
      </div>
    </>
  )
}

export default OnlineBoard
{
  /* <div className="flex pt-10 flex-col items-center  justify-center mt-10  gap-5 text-white w-[100%]">
            <div className={` flex w-[200px] h-[50px]  items-center  overflow-hidden  bg-[#303030]  `}>
              <div className="bg-black min-w-8 h-8 rounded-full ml-3 overflow-hidden">
                <img className="w-[100%] h-[100%] " src={player1?.imageUrl} alt="" />
              </div>
              <h1 className=" text-nowrap overflow-hidden text-ellipsis p-3">{player1?.firstName}</h1>
            </div>
            <div className={`flex  w-[200px] h-[50px]   items-center  bg-[#303030]  `}>
              {
                player2 == undefined ?
                <p></p>
                :
                <>
                  <div className="bg-black min-w-8 h-8 rounded-full ml-3 overflow-hidden">
                    <img className="w-[100%] h-[100%]" src={player2?.imageUrl} alt="" />
                  </div>
                  <h1 className=" text-nowrap text-ellipsis overflow-hidden p-3">
                    {player2?.firstName}
                  </h1>
                </>
              }
            </div>
          </div> */
}
