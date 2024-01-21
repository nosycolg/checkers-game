import React from 'react';

interface PieceProps {
    type: string | null;
}

const Piece: React.FC<PieceProps> = ({ type }) => {
    const pieceColor = type === 'black' ? 'black-piece' : 'white-piece';

    return <div className={`piece ${pieceColor}`} />;
};

export default Piece;
