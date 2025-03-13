interface WinnerProps {
  winner: string
  handleReset: () => void
}

const Winner = ({ winner, handleReset }: WinnerProps) => {
  return (
    <>
      <div className="fixed grid z-10 bg-black text-white w-[100vw] h-[100vh] ">
        <div
          className="flex flex-col justify-center items-center
           px-10 py-7 place-self-center bg-[#303030] rounded"
        >
          <h1>GAME OVER</h1>
          <h2>{winner.toUpperCase()} WINS</h2>
          <button
            className="py-2 rounded px-3 mt-4 bg-black m-0"
            onClick={handleReset}
          >
            rematch
          </button>
        </div>
      </div>
    </>
  )
}

export default Winner
