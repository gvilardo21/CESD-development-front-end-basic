import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
//import Button from "../components/Button/Button.js";
//import Input from "../components/Input/Input.js";

const CalculatorPage = () => {
  //operations
  const operations = [
    {
      value: "SUM",
      label: "+",
    },
    {
      value: "SUB",
      label: "-",
    },
    {
      value: "MULT",
      label: "*",
    },
    {
      value: "DIV",
      label: "/",
    },
  ];

  //get numbers and operation
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [operation, setOperation] = useState();

  //submit operation
  const handleSubmit = (event) => {
    event.preventDefault();
    //do something with numberOne and numberTwo
    console.log(numberOne, numberTwo, operation);
  };

  return (
    <div className="calculator-page">
      <h2>This is a simple calculator</h2>
      <form
        style={{ display: "flex", justifyContent: "center" }}
        onSubmit={handleSubmit}
      >
        <input
          style={{ margin: "10px", display: "block" }}
          type="number"
          value={numberOne}
          onChange={(e) => setNumberOne(e.target.value)}
        />

        <TextField
          select
          style={{ margin: "10px", display: "block" }}
          value={operation}
          onChange={(event) => setOperation(event.target.value)}
        >
          {operations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br>
        <input
          style={{ margin: "10px", display: "block" }}
          type="number"
          value={numberTwo}
          onChange={(e) => setNumberTwo(e.target.value)}
        />
        <br></br>
        <input type="submit" value="Calculate!" className="ClassicButton" />
      </form>
    </div>
  );
};

export default CalculatorPage;
