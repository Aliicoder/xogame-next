interface NoWinnerProps {
  handleReset: () => void
}
const NoWinner = ({ handleReset }: NoWinnerProps) => {
  return (
    <div className="fixed z-10 grid bg-black text-white w-[100vw] h-[100vh]">
      <div
        className="flex flex-col justify-center items-center
          px-10 py-7 place-self-center bg-[#303030] rounded"
      >
        <h1>GAME OVER</h1>
        <h2>DRAW</h2>
        <button
          className="py-2 rounded px-3 mt-4 bg-black m-0"
          onClick={handleReset}
        >
          rematch
        </button>
      </div>
    </div>
  )
}

export default NoWinner
