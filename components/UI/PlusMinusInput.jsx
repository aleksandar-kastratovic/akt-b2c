import classes from "./PlusMinusInput.module.scss";

/**
 * Input with plus and minus UI element
 *
 * @author Aleksandar Ječmenić <aleksandar.jecmenic@croonus.com>
*/
const PlusMinusInput = ({ className, amount, setCount }) => {


  // If minus is clicked
  const onMinusHandler = () => {
    if (amount !== 1) setCount((prev) => prev - 1);
    if (amount === "") setCount(1);
  };

  // If plus is clicked
  const onPlusHandler = () => {
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
    <div className={`${classes["container"]} ${className}`}>
      <button className={classes["min-plus"]} onClick={onMinusHandler}>
        -
      </button>
      <input
        maxLength="2"
        className={classes["input"]}
        value={amount}
        onChange={onInputChange}
      ></input>
      <button className={classes["min-plus"]} onClick={onPlusHandler}>
        +
      </button>
    </div>
  );
};

export default PlusMinusInput;
