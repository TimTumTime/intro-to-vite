const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    console.log(count);
    count += 1;
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn">
        Increment
      </button>
    </div>
  );
};

export default ErrorExample;
