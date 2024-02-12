import { useEffect } from "react";
import { toast } from "react-toastify";

const PlusMinusInputOne = ({ className, amount, setCount, max, ...props }) => {
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

  useEffect(() => {
    if (amount > max) {
      setCount(max);
      toast.error(`Na lageru trenutno nema željena količina artikala.`, {
        position: "top-center",
      });
    }
  }, [amount]);

  return (
    <div className="bg-[#fbfbfb] px-3 border max-md:h-full py-0.5 border-[#eaeaea] max-md:border-[#919191]">
      <div className="flex items-center w-full">
        <span
          className="cursor-pointer text-lg select-none"
          onClick={(e) => {
            onMinusHandler(e);
            props.onClick();
          }}
        >
          -
        </span>

        <input
          maxLength="2"
          type="number"
          value={amount}
          onChange={(e) => {
            onInputChange(e);
            props.onClick();
          }}
          className="w-12 text-center bg-[#fbfbfb] focus:border-none focus:outline-none focus:ring-0 select-none font-bold border-none"
        ></input>
        <span
          className="cursor-pointer text-lg select-none"
          onClick={(e) => {
            onPlusHandler(e);
            props.onClick();
          }}
        >
          +{" "}
        </span>
      </div>
    </div>
  );
};

export default PlusMinusInputOne;
