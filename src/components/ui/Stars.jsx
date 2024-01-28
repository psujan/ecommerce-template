/* eslint-disable react/prop-types */
export default function Stars({rating}){
  let stars = "";
  stars = [...Array(5)].map((i, idx) => (
    <i className={`ri-star-${idx < rating ? "fill" : "line"}`} key={idx}></i>
  ));

  return (
    <span className="text-primary">{stars}</span>
  )
}