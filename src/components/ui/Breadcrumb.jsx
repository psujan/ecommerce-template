import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb fs-tiny">
      <div className="container">
        <ul className="d-inline-flex breadcrumb-link-wrap">
          <li>
            <Link to="/home" className="breadcrumb-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/home" className="breadcrumb-link">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/home" className="breadcrumb-link">
              Samsung Galaxy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
