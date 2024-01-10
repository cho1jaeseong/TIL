export default function GameOver({winner,onSelect,endPlayer}){
    return (
        <div id="game-over" >
        <h2>Game Over!</h2>
        <p>{endPlayer[winner]}</p>
        <button onClick={onSelect}>Re-Game</button>
        </div>
    )
}