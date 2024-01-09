import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player1" symbol="X" />
          <Player name="player2" symbol="O" />
        </ol>

        <GameBoard />
      </div>
    </main>
  )
}

export default App