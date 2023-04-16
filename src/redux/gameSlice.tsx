import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Cell = {
  index: number
  value: string
}

type State = {
  player: 'X' | 'O';
  score: number;
  board: Cell[];
  someoneWon: boolean;
}

const initialState: State = {
  player: 'X',
  score: 0,
  board: Array.from({ length: 9 }, (_, index) => ({ index, value: ""})),
  someoneWon: false
}

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setPlayer(state, action: PayloadAction<'X' | 'O'>) {
      return { ...state, player: action.payload };
    },
    setScore(state, action: PayloadAction<number>) {
      return { ...state, score: action.payload }
    },
    setCell(state, action: PayloadAction<{ index: number, value: string }>) {
      const { index, value } = action.payload;
      return {
        ...state,
        board: state.board.map((cell) => cell.index === index ? {...cell, value } : cell)
      }
    },
    setSomeoneWon(state, action: PayloadAction<boolean>) {
      return { ...state, someoneWon: action.payload }
    },
  },
});

export const { setPlayer, setScore, setCell, setSomeoneWon } = gameSlice.actions;
export default gameSlice.reducer;

export const useGame = (state: any) => {
  return state.game as State
}
