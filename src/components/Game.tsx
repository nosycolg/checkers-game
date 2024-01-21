import React, { useState } from 'react';
import Board from './Board';
import '../Game.css';

const Game: React.FC = () => {
    const initialBoard: (string | null)[][] = [
        [null, 'black', null, 'black', null, 'black', null, 'black'],
        ['black', null, 'black', null, 'black', null, 'black', null],
        [null, 'black', null, 'black', null, 'black', null, 'black'],
        Array(8).fill(null),
        Array(8).fill(null),
        ['white', null, 'white', null, 'white', null, 'white', null],
        [null, 'white', null, 'white', null, 'white', null, 'white'],
        ['white', null, 'white', null, 'white', null, 'white', null],
    ];

    const [board, setBoard] = useState<(string | null)[][]>(initialBoard);
    const [currentPlayer, setCurrentPlayer] = useState<'white' | 'black'>('white');
    const [selectedPiece, setSelectedPiece] = useState<{ row: number; col: number } | null>(null);
    const [whitePiecesCaptured, setWhitePiecesCaptured] = useState<number>(0);
    const [blackPiecesCaptured, setBlackPiecesCaptured] = useState<number>(0);

    const handleClick = (row: number, col: number) => {
        const clickedPiece = board[row][col];

        if (!selectedPiece && clickedPiece === currentPlayer) {
            setSelectedPiece({ row, col });
        } else if (selectedPiece && clickedPiece === null) {
            const updatedBoard = [...board];
            updatedBoard[row][col] = currentPlayer;
            updatedBoard[selectedPiece.row][selectedPiece.col] = null;

            setBoard(updatedBoard);
            setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
            setSelectedPiece(null);
        } else if (selectedPiece && canPieceCapture(selectedPiece, { row, col })) {
            const updatedBoard = [...board];
            updatedBoard[row][col] = currentPlayer;
            updatedBoard[selectedPiece.row][selectedPiece.col] = null;

            const capturedRow = (selectedPiece.row + row) / 2;
            const capturedCol = (selectedPiece.col + col) / 2;
            const capturedPiece = board[capturedRow][capturedCol];

            updatedBoard[capturedRow][capturedCol] = null;

            setBoard(updatedBoard);
            setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
            setSelectedPiece(null);

            if (capturedPiece === 'white') {
                setWhitePiecesCaptured(whitePiecesCaptured + 1);
            } else if (capturedPiece === 'black') {
                setBlackPiecesCaptured(blackPiecesCaptured + 1);
            }
        } else {
            setSelectedPiece(null);
        }
    };

    const canPieceCapture = (from: { row: number; col: number }, to: { row: number; col: number }) => {
        const capturedRow = (from.row + to.row) / 2;
        const capturedCol = (from.col + to.col) / 2;

        return (
            Math.abs(from.row - to.row) === 2 &&
            Math.abs(from.col - to.col) === 2 &&
            board[capturedRow][capturedCol] !== null &&
            board[capturedRow][capturedCol] !== currentPlayer
        );
    };

    return (
        <div className="game">
            <Board board={board} handleClick={handleClick} />
            <div>
                <p>Current Player: {currentPlayer}</p>
            </div>
        </div>
    );
};

export default Game;
