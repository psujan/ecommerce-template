import { Link } from "react-router-dom";
const searchItems = ["Men's Shoes", "Slippers", "Footwear", "Party Shoes"];

export default function RelatedSearch() {
  return searchItems.map((item, i) => (
    <div className="col-lg-3  text-center" key={i}>
      <Link
        to={`/search-results?q=${item}`}
        className="search-box-link border w-100 h-100 d-inline-block p-3"
      >
        <span className="fs-text">
          <i className="ri-search-line pe-2"></i>
          {item}
        </span>
      </Link>
    </div>
  ));
}
