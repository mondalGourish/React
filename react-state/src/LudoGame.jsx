import { useState } from "react";
export default function LudoGame() {
  let [moves, setMoves] = useState({ red: 0, blue: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    console.log(`Count.blue = ${moves.blue}`);
    setMoves((prevMoves) => {
      return {
        ...prevMoves,
        blue: prevMoves.blue + 1,
      };
    });
    };

    let updateRed = () => {
      console.log(`Count.red = ${moves.red}`);
      setMoves((prevMoves) => {
        return {
          ...prevMoves,
          red: prevMoves.red + 1,
        };
      });
    };

    let updateYellow = () => {
      console.log(`Count.yellow = ${moves.yellow}`);
      setMoves((prevMoves) => {
        return {
          ...prevMoves,
          yellow: prevMoves.yellow + 1,
        };
      });
    };
  

  let updateGreen = () => {
      console.log(`Count.green = ${moves.green}`);
      setMoves((prevMoves) => {
        return {
          ...prevMoves,
          green: prevMoves.green + 1,
        };
      });
    };
  

  return (
    <div>
      <h4>Game begins</h4>
      <div className="board">
        <p>Blue count = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Red count = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
        <p>Yellow count = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green count = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
      </div>
    </div>
  );
}
