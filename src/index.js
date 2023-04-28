import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import App from "./App";

/**
 * react hooks?
 */
 
class Square extends React.Component {
    render() {
      return (
        // <head name = "Tic-Tac-Toe">
            <button className="square">
                {/* TODO */}
            </button>
        // </head>
      );
    }
  }
  
class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}

function welcome(){
    return(
    <>
        <div className='welcomeMessage'>
            <h1>Welcome to Tic-Tac-Toe Game </h1>
            <h2>Instructions:</h2>
            <h3>Click on the block on the board below to make your move! </h3>
        
        </div>
    </>
        
    );
}

class Game extends React.Component {
    render() {
      return (
        <div className="game">
            <div className="App">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
            
        </div>
      );
    }
}
  
// ========================================
  
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
  
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);