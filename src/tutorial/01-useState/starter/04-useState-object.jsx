import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "Fishing",
  });
  const { name, age, hobby } = person;

  return (
    <div>
      <h2>{name}</h2>
      <h4>Age: {age}</h4>
      <h4>Hobby: {hobby}</h4>
      <button
        className="btn"
        onClick={() => {
          setPerson({ name: "Susan", age: 30, hobby: "Hiking" });
        }}
      >
        Change info
      </button>
    </div>
  );
};
export default UseStateObject;
