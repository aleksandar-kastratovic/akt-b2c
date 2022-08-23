import { useState } from "react";
import classes from "./InputFiled.module.scss";

const InputField = ({
  type = "text",
  placeholder = "",
  required = false,
  data = "",
  width = "100%",
  onPassValue = () => {},
  className,
}) => {
  const [value, setValue] = useState(data);

  return (
    <input
      className={`${className} ${classes[`width-${width}`]}`}
      type={type}
      placeholder={required ? `${placeholder}*:` : `${placeholder}:`}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onBlur={() => {
        onPassValue(value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.target.blur();
      }}
    ></input>
  );
};

export default InputField;
