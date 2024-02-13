/* eslint-disable react/prop-types */
export default function Line({
  width = "1px",
  height = "24px",
  controlClass = "",
}) {
  return (
    <span
      className={`d-inline bg-gray-neutral ${controlClass}`}
      style={{ width: width, height: height }}
    ></span>
  );
}
