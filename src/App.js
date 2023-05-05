import './App.css';
import { useState } from 'react';
import TimeComponent from './TimeComponent.js';

  function App() {
    return (
        // JSX
        <div className="welcomeMessage">
                <h1>Welcome to Tic-Tac-Toe Game </h1>
                <h2>Instructions:</h2>
                <h3>Click on the block on the board below to make your move! </h3>
        </div>
    );
  }

  /**
   * Each Square will now receive a value prop that will either be 'X', 'O', or null for empty squares.
   * We need Sqaure to update the board state.
   */
  function Square({value, onSquareClick}){
    // value stores the value 
    // setValue is a function that can be used to change the value. 
    // The null passed to useState is used as the initial value for this state variable, 
    // so value = null in default.
    // const [value, setValue] = useState(null); // Each Square has its own state
    // function opClick(){
    //     setValue("X");
    //     console.log("clicked!");
    // }
    // return (
    //     <button className="square" onClick={handleClick} >
    //       {value}
    //     </button>
    //   );
    return (
    <button className="square" onClick={onSquareClick} >
        {value}
    </button>
    );

  }

  function RestartButtom({onClick}){
    return(
        <button className = "restartButtom" onClick={onClick}>
            Restart
        </button>
    )
  }


function getWinner(square){
    const winingSets = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winingSets.length; i++){
        const [a,b,c] = winingSets[i];
        if(square[a] && square[a] === square[b] && square[a] === square[c]) return square[a];

    }
    return null;

}


 function Board({xisNext, square, setXisNext, setSquares}) {
    /**
     * After Click UI.
     */
    function opClick(i){
        // if squares are already filled or there is alreayd a winner, NO interaction.
        if(square[i] || getWinner(square)) return;
        const nextSquare = square.slice();
        if (xisNext) nextSquare[i] = "X";
        else nextSquare[i] = "O";
        setSquares(nextSquare); // re-render
        setXisNext(!xisNext); // re-render

    }
    const winner = getWinner(square);
    let status;
    if(winner!= null) status = "Game Over! Winner is: " + winner;
    if(winner == null && square.every(element => element != null)) status = "Hey! It's a Tie! Do you want to start again?"
    else status = "Next Player : " + (xisNext ? "X" : "O");
    // if(square.every(Element => Element != null)){
    //     status = "Game Over! Winner is: " + winner;
    // }
    const [color, setColor] = useState("Default");
    return (
      <>
        <div>
          <App />
        </div>
        <div>
            <p>
                Pick a Board Background color:{' '}
                <select value = {color} onChange={e => setColor(e.target.color)}>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Default">Default</option>

                </select>
            </p>
        </div>
        <div className = "boardWrapper">
            <div className="status">{status}</div>
            <div className="board-row">
            <Square value = {square[0]} onSquareClick={()=>opClick(0)}/>
            <Square value = {square[1]} onSquareClick={()=>opClick(1)}/>
            <Square value = {square[2]} onSquareClick={()=>opClick(2)}/>
            
            </div>
    
            <div className="board-row">
            <Square value = {square[3]} onSquareClick={()=>opClick(3)}/>
            <Square value = {square[4]} onSquareClick={()=>opClick(4)}/>
            <Square value = {square[5]} onSquareClick={()=>opClick(5)}/>
            </div>

            <div className="board-row">
            <Square value = {square[6]} onSquareClick={()=>opClick(6)}/>
            <Square value = {square[7]} onSquareClick={()=>opClick(7)}/>
            <Square value = {square[8]} onSquareClick={()=>opClick(8)}/>
            </div>
        </div>
      </>
    );
  }
  
  export default function Game(){
    const [xisNext, setXisNext] = useState(true);
    const [square, setSquares] = useState(Array(9).fill(null));
    // control component. Manipulate the state.
    function handleRestartGame(){
        setXisNext(true);
        setSquares(Array(9).fill(null));
    }

    return (
        <div className = 'Game'>
            <header className = 'appHeader'>
                <div>
                    <Board 
                        xisNext={xisNext}
                        square={square}
                        setXisNext={setXisNext}
                        setSquares={setSquares}
                    />
                </div>
                <div>
                    <RestartButtom onClick={handleRestartGame}/>
                </div>
                <TimeComponent />
            </header>
        </div>
        
    );
  }