import { useState } from "react";
import styles from "./styles/Header.module.scss";
import { Link } from "react-router-dom";
import MobileSideNav from "./MobileSideNav";

export default function HeaderBottom() {
  const [sideNav, setSideNav] = useState(false);

  const handleSideNav = (status) => {
    setSideNav(status);
  };

  return (
    <div
      className={`${styles.headerBottom} d-flex align-items-center border-bottom-light position-relative`}
    >
      <div className="container-fluid px-0">
        <div className={`d-flex align-items-center ${styles.headerBottomNav}`}>
          <div
            className={styles.browseCategory}
            onClick={() => handleSideNav(true)}
          >
            <a href={() => false}>
              {" "}
              <span>
                <i className="ri-menu-line pe-2"></i>
              </span>
              Browse
            </a>
          </div>
          <nav>
            <ul className="d-inline-flex">
              <li>
                <Link to="/">Electronics</Link>
              </li>
              <li>
                <Link to="/">Home Appliances</Link>
              </li>
              <li>
                <Link to="/">Clothing</Link>
              </li>
              <li>
                <Link to="/">Groccery</Link>
              </li>
              <li>
                <Link to="/">Health & Beauty</Link>
              </li>
              <li>
                <Link to="/">Gaming</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <MobileSideNav show={sideNav} closeSideNav={() => handleSideNav(false)} />
    </div>
  );
}
