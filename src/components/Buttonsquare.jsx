import { useState } from "react";
import { Button } from "./Button";

export default function Board() {
  const [xisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xisNext ? "X" : "O";
    setXisNext(!xisNext);
    setSquares(nextSquares);
  }

  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xisNext ? "X" : "O");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-4 text-3xl font-bold text-indigo-600">{status}</div>
      <div className="flex flex-col items-center justify-center border-4 border-indigo-600 p-2 bg-slate-300 rounded-lg shadow-lg">
        <div className="flex">
          <Button value={squares[0]} onSquareClicked={() => handleClick(0)} />
          <Button value={squares[1]} onSquareClicked={() => handleClick(1)} />
          <Button value={squares[2]} onSquareClicked={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Button value={squares[3]} onSquareClicked={() => handleClick(3)} />
          <Button value={squares[4]} onSquareClicked={() => handleClick(4)} />
          <Button value={squares[5]} onSquareClicked={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Button value={squares[6]} onSquareClicked={() => handleClick(6)} />
          <Button value={squares[7]} onSquareClicked={() => handleClick(7)} />
          <Button value={squares[8]} onSquareClicked={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

function CalculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
