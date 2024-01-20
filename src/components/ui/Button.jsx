import PropTypes from "prop-types";
// import styles from "./styles/Button.module.scss";

export default function Button({
  title,
  useDefaultClass = true,
  appendClass = "_",
  type = "primary",
  iconClass=""
}) {
  let btnClass;
  btnClass = useDefaultClass ? `baseBtn ${appendClass} ` : `${appendClass}`;
  btnClass = type == "primary" ? `${btnClass} baseBtnPrimary` : btnClass;
  return <button className={btnClass}>{iconClass ? <i className={`${iconClass} pe-2`}></i>:''}{title}</button>;
}

Button.propTypes = {
  title: PropTypes.string,
  appendClass: PropTypes.string,
  useDefaultClass: PropTypes.bool,
  type: PropTypes.string,
  iconClass:PropTypes.string
};
