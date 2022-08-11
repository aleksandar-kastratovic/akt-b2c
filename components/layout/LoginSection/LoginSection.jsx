import Link from "next/link";
import styles from "./LoginSection.module.scss";

const LoginSection = ({
  title = "",
  subtitle = "",
  button = "",
  buttonurl = "",
  link = "",
  url = "#",
  children,
  classes = {},
}) => {
  return (
    <div className={classes["section"]}>
      <h2 className={`${styles["section-title"]} ${classes["section-title"]}`}>
        {title}
      </h2>
      <p
        className={`${styles["section-subtitle"]} ${classes["section-subtitle"]}`}
      >
        {subtitle}
      </p>
      <div
        className={`${styles["section-children"]} ${classes["section-children"]}`}
      >
        {children}
      </div>
      <div
        className={`${styles["section-bottom"]} ${classes["section-bottom"]}`}
      >
        {link !== "" ? (
          <Link href={url}>
            <a
              className={`${styles["section-link"]} ${classes["section-lnik"]}`}
            >
              {link}
            </a>
          </Link>
        ) : (
          ""
        )}
        {button !== "" ? (
          buttonurl === "" ? (
            <button
              className={`${styles["section-button"]} ${classes["section-button"]}`}
            >
              {button}
            </button>
          ) : (
            <Link href={buttonurl}>
              <button
                className={`${styles["section-button"]} ${classes["section-button"]}`}
              >
                {button}
              </button>
            </Link>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LoginSection;
