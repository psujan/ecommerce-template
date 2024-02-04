import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import { Categories } from "../../../data/categories";
import { Link } from "react-router-dom";

export default function MobileSideNav({ show, closeSideNav }) {
  return (
    <div className={`mobileSideNav ${show ? "open" : "close"}`}>
      <div
        className={`mobileSideNavTop d-flex align-items-center justify-content-between py-4 px-3 border-bottom`}
      >
        <h4 className="fw-medium">Browse Products</h4>
        <a href={() => false} className={`sideNavClose`} onClick={closeSideNav}>
          <i className="ri-close-line"></i>
        </a>
      </div>
      <div className={`mobileSideNavMain px-3`}>
        <h5 className="text-muted fw-medium py-3">Shop By Category</h5>
      </div>
      <div id="mobileSideAccordion">
        <Accordion bsPrefix={`mobileSideAccordion accordion`}>
          {Categories.map((row, i) => {
            return (
              <Accordion.Item eventKey={i} key={i}>
                <Accordion.Header>{row.title}</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {row.subCategory.map((data, k) => {
                      return (
                        <li className={`subCategoryList`} key={k}>
                          <Link to="/shop-by-category">{data.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

MobileSideNav.propTypes = {
  show: PropTypes.bool,
  closeSideNav: PropTypes.func,
};
