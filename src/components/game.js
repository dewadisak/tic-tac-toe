
import React, { useState, useEffect } from "react";
import Board from "./board";
import Message from "./message";
import Refresh from "./refresh";

const isWon = (inputnumber) => {
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
    let [a, b, c] = lines[i];
    if (
      inputnumber[a] !== "" &&
      inputnumber[a] === inputnumber[b] &&
      inputnumber[a] === inputnumber[c]
    ) {
      // console.log("bod", board[a] + "bodb", board[b], "bodc", board[c]);

      if (inputnumber[a] === 1) {
        console.log("X win");
        return "X";
      }
      if (inputnumber[a] === 2) {
        console.log("Y win");
        return "Y";
      }
    }
  }

  for (let i = 0; i < inputnumber.length; i++) {
    if (inputnumber[i] === 0) {
      console.log("null");
      return null;
    }
  }
  console.log("draw");
  return "draw";
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [message, setMessage] = useState("Start");
  const [isInput, setisInput] = useState([
    [1, 2, 0],
    [0, 1, 2],
    [0, 0, 1],
  ]);

  const refresh = () => {
    setBoard(Array(9).fill(""));
    setMessage("Start");
  };

  useEffect(() => {
    setBoard([].concat(...isInput));
    console.log("input", isInput);
  }, []);

  // const handleInputchange =(event) =>{
  //   setBoard(event.target.value)

  // }

  const submit = async () => {
    setBoard([].concat(...isInput));

    if (isWon(board) === "X") {
      setMessage("X win");
    } else if (isWon(board) === "Y") {
      setMessage("Y win");
    } else if (isWon(board) === null) {
      setMessage("null");
    } else {
      setMessage("Draw");
    }
  };

  const style = {
    width: "300px",
    margin: "0 auto",
    marginTop: "20px",
    display: "grid",
    fontSize: "40px",
    fontWeight: "800",
    textAlign: "center",
    color: "#292828",
  };

  return (
    <div>
      <Message value={message} />
      <Board value={board} />
      <Refresh onClick={refresh} value={"Refresh"} />
      <button style={style} onClick={submit}>
        submit
      </button>
    </div>
  );
};

export default Game;
