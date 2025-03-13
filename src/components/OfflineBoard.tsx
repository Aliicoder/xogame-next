import { IGameBoard } from "@/types"

interface OfflineBoardProps {
  gameBoard: IGameBoard
  addNewTurn: (i: number, j: number) => void
}
const OfflineBoard = ({ gameBoard, addNewTurn }: OfflineBoardProps) => {
  return (
    <div className="flex flex-col place-self-center">
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
    </div>
  )
}

export default OfflineBoard
