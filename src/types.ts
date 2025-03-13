export interface ITurn {
  activePlayer: string
  block: { i: number; j: number }
}

export type IGameBoard = (string | null)[][]
export type IROw = (string | null)[]
export interface OnlineBoardProps {
  gameBoard: (string | null)[][]
  roomId: string
  addNewTurn: (i: number, j: number) => void
  lock: boolean | undefined
}
