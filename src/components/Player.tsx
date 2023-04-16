import { useSelector } from "react-redux"
import { useGame } from "../redux/gameSlice"

export const Player = () => {
  const game = useSelector(useGame)
  const player = game.player

  return(
    <>
      <h2 className="text-orange-800 text-5xl font-bold pb-8">Jogo da Velha</h2>
      <div className="text-orange-800 text-3xl font-bold pb-8" >
        Player: {player}
      </div>
    </>
  )
}