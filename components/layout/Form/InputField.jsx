import { useState } from "react";

const InputField = ({
  type = "text",
  placeholder = "",
  required = false,
  data = "",
  width = "100%",
  onPassValue = () => {},
}) => {
  const [value, setValue] = useState(data);

  return (
    <input
      type={type}
      placeholder={required ? `${placeholder}*` : placeholder}
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
      style={{ width: width }}
    ></input>
  );
};

export default InputField;
