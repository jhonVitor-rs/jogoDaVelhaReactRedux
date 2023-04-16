import { Provider } from "react-redux"
import store from "./redux/store"
import { Game } from "./components/Game"

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}

export default App
