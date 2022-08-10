import Link from "next/link";
import styles from "./LoginSection.module.scss";

const LoginSection = ({
  title = "",
  subtitle = "",
  button = "",
  link = "",
  url = "#",
  children,
  classes = "",
}) => {
  return (
    <div className={classes}>
      <h2 className={styles["section-title"]}>{title}</h2>
      <p className={styles["section-subtitle"]}>{subtitle}</p>
      <div className={styles["section-children"]}>{children}</div>
      <div className={styles["section-bottom"]}>
        {link !== "" ? (
          <Link href={url}>
            <a className={styles["section-link"]}>{link}</a>
          </Link>
        ) : (
          ""
        )}
        {button !== "" ? (
          <button className={styles["section-button"]}>{button}</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LoginSection;
