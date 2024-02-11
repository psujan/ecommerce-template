/* eslint-disable react/prop-types */
export default function SpecialTag({ text = "SPECIAL", controlClass = "" }) {
  return (
    <div className={`special-tag ${controlClass}`}>
      <span className="fw-bold">{text}</span>
    </div>
  );
}
