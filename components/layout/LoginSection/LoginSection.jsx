import styles from "./LoginSection.module.scss";

const LoginSection = ({
  title = "",
  subtitle = "",
  button = "",
  link = "",
  children,
  classes = "",
}) => {
  return (
    <div className={classes}>
      <h2 className={styles["section-title"]}>{title}</h2>
      <p className={styles["section-subtitle"]}>{subtitle}</p>
      <div>{children}</div>
      {link !== "" ? <a>{link}</a> : ""}
      {button !== "" ? (
        <button className={styles["section-button"]}>{button}</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginSection;
