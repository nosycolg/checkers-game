import React from 'react';
import Square from './Square';

interface BoardProps {
  board: (string | null)[][];
  handleClick: (row: number, col: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, handleClick }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((piece, colIndex) => {
            const isBlack = (rowIndex + colIndex) % 2 === 1;
            return (
              <Square
                key={colIndex}
                piece={piece}
                handleClick={() => handleClick(rowIndex, colIndex)}
                isBlack={isBlack}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
