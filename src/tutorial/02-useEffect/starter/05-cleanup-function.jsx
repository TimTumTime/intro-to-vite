import { useState, useEffect } from "react";
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2>Cleanup Function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component (Simple Return)
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log("Some Function");
    };
    window.addEventListener("scroll", someFunc);
    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  }, []);
  return <h2>Random Component</h2>;
};

export default CleanupFunction;
