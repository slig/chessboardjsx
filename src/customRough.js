import rough from 'roughjs';

export const roughSquare = ({ squareElement, squareWidth }) => {
  let rc = rough.svg(squareElement);
  const chessSquare = rc.rectangle(0, 0, squareWidth, squareWidth, {
    roughness: 0.5,
    fill: 'lightgrey',
    // bowing: 5,
    fillStyle: 'cross-hatch',
    fillWeight: 0.25
  });
  squareElement.appendChild(chessSquare);
};
