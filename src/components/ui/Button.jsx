import PropTypes from "prop-types";
// import styles from "./styles/Button.module.scss";

export default function Button({
  title,
  useDefaultClass = true,
  appendClass = "_",
  type = "primary",
  iconClass = "",
  hoverTitle = "",
}) {
  let btnClass;
  btnClass = useDefaultClass ? `baseBtn ${appendClass} ` : `${appendClass}`;
  btnClass = type == "primary" ? `${btnClass} baseBtnPrimary` : btnClass;
  return (
    <button title={hoverTitle} className={btnClass}>
      {iconClass ? (
        <i className={`${iconClass} ${title ? "pe-2" : ""}`}></i>
      ) : (
        ""
      )}
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  appendClass: PropTypes.string,
  useDefaultClass: PropTypes.bool,
  type: PropTypes.string,
  iconClass: PropTypes.string,
  hoverTitle: PropTypes.string,
};
