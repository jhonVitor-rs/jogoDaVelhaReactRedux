import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";

const rootReducer = {
  game: gameSlice
}

const store = configureStore({
  reducer: rootReducer
})

export default store