import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setCell, setPlayer, setSomeoneWon, useGame } from "../redux/gameSlice"
import checkWinner from "../hooks/Winner"

type IBoard = {
  index: number
}

export const Cell = ({index}: IBoard) => {
  const game = useSelector(useGame)
  const player = game.player
  const board = game.board
  const cell = game.board[index]
  const someoneWon = game.someoneWon
  const dispatch = useDispatch()
  const [winner, setWinner] = useState(false);

  const handleChangeGame = () => {
    if(!someoneWon && cell.value === ''){
      const newBoard = handleCell()
      if(checkWinner(newBoard)){
        handleWinner()
      }else{
        handlePlayer()
      }
    }
  }

  const handleWinner = () => {
    setWinner(true);
  }

  const handlePlayer = () => {
    const nextPlayer = player === 'X' ? 'O' : 'X';
    dispatch(setPlayer(nextPlayer));
  }

  const handleCell = () => {
    dispatch(setCell({index, value: player}))
    const updatedBoard = board.map((cell, i) => {
      if (i === index) {
        return {
          ...cell,
          value: player
        }
      }
      return cell
    })
    return updatedBoard
  }

  useEffect(() => {
    if (winner) {
      dispatch(setSomeoneWon(true));
    }
  }, [winner]);

  return(
    <button 
      key={index}
      type='button'
      className="w-16 h-16 bg-gray-100 rounded-md p-4 text-2xl font-bold flex items-center justify-center"
      onClick={handleChangeGame}
    >
      {cell.value}
    </button>
  )
}
