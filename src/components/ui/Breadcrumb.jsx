/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Breadcrumb({ breadcrumbItems }) {
  console.log(breadcrumbItems);
  const bItems = breadcrumbItems.map((item, i) => {
    <li key={i}>
      <Link to={item.link} className="breadcrumb-link">
        {item.title}
      </Link>
    </li>;
  });

  console.log(bItems);
  return (
    <div className="breadcrumb fs-tiny">
      <div className="container">
        <ul className="d-inline-flex breadcrumb-link-wrap">
          <li>
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
          </li>
          {breadcrumbItems.map((item, i) => (
            <li key={i}>
              <Link to={item.link} className="breadcrumb-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
