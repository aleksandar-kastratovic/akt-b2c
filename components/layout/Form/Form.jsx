import InputField from "./InputField";
import styles from "./Form.module.scss";

const logValue = (val) => {
  console.log(val);
};

const Form = ({ data = [] }) => {
  return (
    <form className={styles["form"]}>
      {data.map((field, index) => {
        return (
          <InputField
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            data={field.value}
            onPassValue={logValue}
            width={field.width}
            className={styles["form-input"]}
          />
        );
      })}
    </form>
  );
};

export default Form;
