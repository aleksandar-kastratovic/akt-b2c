const PlusMinusInputOne = ({ className, amount, setCount }) => {
  // If minus is clicked
  const onMinusHandler = (e) => {
    e.preventDefault();
    if (amount !== 1) setCount((prev) => prev - 1);
    if (amount === "") setCount(1);
  };

  // If plus is clicked
  const onPlusHandler = (e) => {
    e.preventDefault();
    if (amount === "") setCount(1);
    else setCount((prev) => prev + 1);
  };

  // If value is typed in
  const onInputChange = (e) => {
    if (!isNaN(e.target.value)) {
      if (+e.target.value < 1) setCount("");
      else setCount(+e.target.value);
    }
  };

  return (
    <div className="bg-croonus-5 px-3 border">
      <div className="flex items-center w-full">
        <span
          className="cursor-pointer text-lg select-none"
          onClick={onMinusHandler}
        >
          -
        </span>

        <input
          maxLength="2"
          type="number"
          value={amount}
          onChange={onInputChange}
          className="w-12 text-center bg-croonus-5 focus:border-none focus:outline-none focus:ring-0 select-none font-bold border-none"
        ></input>
        <span
          className="cursor-pointer text-lg select-none"
          onClick={onPlusHandler}
        >
          +{" "}
        </span>
      </div>
    </div>
  );
};

export default PlusMinusInputOne;
