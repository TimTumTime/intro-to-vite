import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("hello world");
    setValue(value + 1);
  };
  sayHello();
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={sayHello}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
