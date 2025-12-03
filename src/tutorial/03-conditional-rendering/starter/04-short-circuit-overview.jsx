import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("John Doe");

  return (
    <div>
      <h3>Falsy OR : {text || "hello world"}</h3>
      <h3>Falsy AND : {text && "hello world"}</h3>
      <h3>Truthy OR : {name || "hello world"}</h3>
      <h3>Truthy AND : {name && "hello world"}</h3>
    </div>
  );
};
export default ShortCircuitOverview;
