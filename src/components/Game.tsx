import { useDispatch, useSelector } from "react-redux"
import { useGame } from "../redux/gameSlice"
import { Player } from "./Player"
import { Cell } from "./Cell"
import { Reset } from "./Reset"

export const Game = () => {
  const game = useSelector(useGame)
  const player = game.player
  const board = game.board
  const someoneWon = game.someoneWon

  return(
    <div className="text-center m-auto bg-zinc-700 pt-8 h-screen">
      <Player />
        <div className="grid grid-cols-3 gap-4 max-w-xs m-auto text-center items-center">
          {board.map((value, index) => (
            <Cell key={index} index={index} />
          ))}
        </div>
        {someoneWon ? 
          <h2 className="text-orange-800 text-2xl font-bold pt-8">Player {player} venceu</h2> :
          <></>
        }
        <Reset /> 
    </div>
  )
}