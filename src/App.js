import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const operators = ["+", "-", "*", "/"];

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "clear") {
      setInput("");
    } else if (value === "decimal") {
      if (!input.includes(".")) {
        setInput(input + ".");
      }
    } else if (value === "0") {
      if (
        input !== "0" &&
        input !== "" &&
        !operators.includes(input[input.length - 1])
      ) {
        setInput(input + "0");
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      if (operators.includes(input[input.length - 1])) {
        setInput(input.slice(0, -1) + value);
      } else {
        setInput(input + value);
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div id="calculator">
      <div id="display">{input || "0"}</div>
      <div className="buttons">
        <button id="clear" onClick={() => handleButtonClick("clear")}>
          AC
        </button>
        <button id="divide" onClick={() => handleButtonClick("/")}>
          /
        </button>
        <button id="multiply" onClick={() => handleButtonClick("*")}>
          *
        </button>
        <button id="seven" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button id="subtract" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <button id="four" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button id="five" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button id="six" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button id="add" onClick={() => handleButtonClick("+")}>
          +
        </button>
        <button id="one" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button id="two" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button id="three" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button id="zero" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button id="decimal" onClick={() => handleButtonClick("decimal")}>
          .{" "}
        </button>
        <button id="equals" onClick={() => handleButtonClick("=")}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
