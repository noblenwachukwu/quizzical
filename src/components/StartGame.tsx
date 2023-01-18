import React from 'react'


interface FuncProps{
handleStart : () => void;
}


const StartGame: React.FC<FuncProps> = ({handleStart}) => {
  return (
    <div>
    <h2>Quizzical app</h2>
    <p>A quiz game to test your smarts!</p>
    <button onClick={handleStart}>Start Game</button>
 </div>
  )
}

export default StartGame