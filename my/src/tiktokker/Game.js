import React, { useState } from 'react';
import Boad from './Boad';
import "./GameStules.css";
import { calculateWiner } from '../helpers';
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWiner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        console.log(boardCopy[index]);
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    }
    return (
        <div>
            <Boad cells={board} onClick={handleClick}></Boad>
                {winner && <div className='game-winer'>winer is {winner}</div>}
            <button className='game-reset' onClick={handleResetGame}>Reset Game</button>
        </div>
    )
}
export default Game;
