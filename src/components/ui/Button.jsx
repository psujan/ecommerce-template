import PropTypes from "prop-types";
import styles from "./styles/Button.module.scss";

export default function Button({
  title,
  useDefaultClass = true,
  appendClass = "_",
  type = "primary",
}) {
  let btnClass;
  btnClass = useDefaultClass
    ? `${styles.baseBtn} ${appendClass} `
    : appendClass;
  btnClass =
    type == "primary" ? `${btnClass} ${styles.baseBtnPrimary}` : btnClass;
  return <button className={btnClass}>{title}</button>;
}

Button.propTypes = {
  title: PropTypes.string,
  appendClass: PropTypes.string,
  useDefaultClass: PropTypes.bool,
  type: PropTypes.string,
};
