import { useState } from "react";
import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleRemovePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const handleClearAll = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => handleRemovePerson(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
