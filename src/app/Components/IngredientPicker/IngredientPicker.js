"use client";
import React, { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

function IngredientPicker({ setSelectedIngredient }) {
  // initializing state to allow search text box
  const [inputValue, setInputValue] = useState("");

  function handleClick(e) {
    const selectedIngredient = e.target.value;
    console.log(`user has selected to search for ${selectedIngredient}`);
    // Call function from parent
    setSelectedIngredient(selectedIngredient);
  }
  return (
    <div className="flex items-center justify-center mb-6">
      <ButtonToolbar
        aria-label="Toolbar with button groups"
        className="flex flex-col space-y-4"
      >
        <div className="me-2 flex" aria-label="First group">
          <Button
            value="chicken"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 m-2 p-2 w-24 h-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🍗
          </Button>
          <Button
            value="pork"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🥩
          </Button>
          <Button
            value="beef"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🍖
          </Button>
        </div>
        <div
          className="flex items-center justify-center mb-6"
          aria-label="Second group w-24 border rounded"
        >
          <Button
            value="pasta"
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🍝
          </Button>
          <Button
            value="rice"
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🍚
          </Button>
          <Button
            value="potato"
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🥔
          </Button>
        </div>
      </ButtonToolbar>
      <div>
        <ButtonGroup aria-label="Third group" className="flex flex-row">
          <input
            type="text"
            placeholder="...or type your own"
            onChange={(e) => setInputValue(e.target.value)} //stores the input
          ></input>
          <Button value={inputValue} onClick={handleClick}>
            Submit text
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default IngredientPicker;
