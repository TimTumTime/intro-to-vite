import React from "react";
import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((currentValue) => {
            const newValue = currentValue + 1;
            console.log("Current Value:", currentValue);
            console.log("New Value:", newValue);
            return newValue;
          });
        }}
        className="btn"
      >
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
