import { useDispatch, useSelector } from "react-redux"
import { setCell, setPlayer, setSomeoneWon, useGame } from "../redux/gameSlice"

export const Reset = () => {
  const dispatch = useDispatch()
  const game = useSelector(useGame)

  const handleReset = () => {
    game.board.map((_, index) => {
      dispatch(setCell({index, value: ''}))
    })
    dispatch(setPlayer('X'))
    dispatch(setSomeoneWon(false))
  }

  return(
    <div>
      <button 
        className="bg-orange-800 text-gray-100 text-2xl font-bold mt-8 py-2 px-6 rounded hover:bg-orange-900 transition"
        onClick={handleReset}
      >
        Restart
      </button>
    </div>
  )
}