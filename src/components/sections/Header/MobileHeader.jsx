import Logo from "../../ui/Logo";
import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "../../../store/features/sideNavSlice";

export default function MobileHeader() {
  const dispatch = useDispatch();
  return (
    <div className="mobile-header">
      <div className="d-flex align-items-center justify-content-between d-lg-none py-2 px-2">
        <div>
          <a
            onClick={() => dispatch(toggleSideNav(true))}
            style={{ fontSize: "1.5rem", lineHeight: "100%" }}
          >
            {" "}
            <span>
              <i className="ri-menu-line pe-2"></i>
            </span>
          </a>
          <Logo></Logo>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/cart" className="dropdown-icon-btn me-2">
            <i className="ri ri-shopping-cart-line"></i>
          </Link>
          <Link to="/login" className="dropdown-icon-btn">
            <i className="ri ri-user-line"></i>
          </Link>
        </div>
      </div>
      <div className="d-lg-none border-top">
        <SearchBar inputControlClass={"border-0"} />
      </div>
    </div>
  );
}
