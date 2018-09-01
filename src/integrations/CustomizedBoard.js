import React from 'react';

import Chessboard from '../Chessboard';
// import elvis from '../img/elvis.png';
// import danielKing from '../img/daniel-king.png';
import { roughSquare } from '../customRough';
import { HumanVsHuman } from './WithMoveValidation';

/* eslint react/display-name: 0 */
/* eslint react/prop-types: 0 */
export default function CustomizedBoard() {
  return (
    <HumanVsHuman>
      {({
        position,
        onDrop,
        onMouseOverSquare,
        onMouseOutSquare,
        squareStyles
        // dropSquareStyle,
        // onDragOverSquare
        // onSquareClick,
        // onSquareRightClick
      }) => (
        <Chessboard
          id="standard"
          orientation="black"
          calcWidth={({ screenWidth }) => (screenWidth < 500 ? 350 : 480)}
          darkSquareStyle={{ backgroundColor: 'black' }}
          lightSquareStyle={{ backgroundColor: '#DD0707' }}
          roughSquare={roughSquare}
          position={position}
          onDrop={onDrop}
          onMouseOverSquare={onMouseOverSquare}
          onMouseOutSquare={onMouseOutSquare}
          squareStyles={squareStyles}
          boardStyle={{
            borderRadius: '5px',
            boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
          }}
          dropOffBoard="trash"
        />
      )}
    </HumanVsHuman>
  );
}
