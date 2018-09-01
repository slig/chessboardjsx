import rough from 'roughjs';

export const roughSquare = ({ squareElement, squareWidth }) => {
  let rc = rough.svg(squareElement);
  const chessSquare = rc.rectangle(0, 0, squareWidth, squareWidth, {
    roughness: 0.3,
    fill: 'black',
    bowing: 2
  });
  squareElement.appendChild(chessSquare);
};
