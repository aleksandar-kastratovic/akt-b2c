import styles from "../../styles/ProductSlider.module.scss"

export function SampleArrow(props) {
  const { className, style, onClick, icon } = props;
  return (
    <div
      className={`${className} ${styles.arrows} ${styles[`arrow-${style}`]}`}
      style={{ display: 'block' }}
      onClick={onClick}
    >
      <img src={`https://b2c.akt.croonus.com/images/icons/${icon}`} />
    </div>
  );
}
