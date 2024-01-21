import React from 'react';
import Piece from './Piece';

interface SquareProps {
    piece: string | null;
    handleClick: () => void;
    isBlack: boolean;
    isSelected: boolean;
}

const Square: React.FC<SquareProps> = ({ piece, handleClick, isBlack, isSelected }) => {
    const squareColor = isBlack ? 'black' : 'white';

    return (
        <div className={`square ${squareColor} ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
            {piece === 'marked' ? <div className="mark" /> : piece && <Piece type={piece} isBlack={isBlack} />}
        </div>
    );
};

export default Square;
