import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "../../ui/Button";
import CartImg1 from "../../../assets/images/cart/cart1.jpg";
import styles from "./styles/UserTools.module.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Simple tooltip
  </Tooltip>
);

// eslint-disable-next-line react/display-name, react/prop-types
export const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <OverlayTrigger
    placement="right"
    delay={{ show: 200, hide: 200 }}
    overlay={renderTooltip}
    onClick={onClick}
  >
    <a
      href=""
      className="dropdown-icon-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <i className="ri-shopping-cart-line"></i>
    </a>
  </OverlayTrigger>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
// eslint-disable-next-line react/display-name
export const CustomMenu = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ style, className, "aria-labelledby": labeledBy }, ref) => {
    // const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul>
          <li className="border-light my-3">
            <div className={`d-flex align-items-center py-2`}>
              <div className={styles.cartImg}>
                <img src={CartImg1} alt="" className="img-fluid" />
              </div>
              <div className="px-2">
                <p className="text-muted fs-tiny mb-2">Electronics</p>
                <h5 className="fw-medium mb-3">Yellow Wireless Headhphone</h5>
                <p className="fs-tiny">1 * $8</p>
              </div>
              <div className="ps-3">
                <a href={() => false} className="cur-p">
                  <i className="ri-delete-bin-line"></i>
                </a>
              </div>
            </div>
          </li>
          <li className="border-light my-3">
            <div className={`d-flex align-items-center py-2`}>
              <div className={styles.cartImg}>
                <img src={CartImg1} alt="" className="img-fluid" />
              </div>
              <div className="px-2">
                <p className="text-muted fs-tiny mb-2">Electronics</p>
                <h5 className="fw-medium mb-3">Yellow Wireless Headhphone</h5>
                <p className="fs-tiny">1 * $8</p>
              </div>
              <div className="ps-3">
                <a href={() => false} className="cur-p">
                  <i className="ri-delete-bin-line"></i>
                </a>
              </div>
            </div>
          </li>
          <li className="border-light my-3">
            <div className={`d-flex align-items-center py-2`}>
              <div className={styles.cartImg}>
                <img src={CartImg1} alt="" className="img-fluid" />
              </div>
              <div className="px-2">
                <p className="text-muted fs-tiny mb-2">Electronics</p>
                <h5 className="fw-medium mb-3">Yellow Wireless Headhphone</h5>
                <p className="fs-tiny">1 * $8</p>
              </div>
              <div className="ps-3">
                <a href={() => false} className="cur-p">
                  <i className="ri-delete-bin-line"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="py-2">
          <div className="d-flex justify-content-between">
            <h5 className="fw-medium mb-3">SUBTOTAL</h5>
            <span>$24</span>
          </div>
        </div>
        <div className="py-2 d-flex gap-3">
          <Button title="Checkout" appendClass="d-inline-block  w-50" />
          <Button title="View Cart" type="secondary" appendClass="w-50" />
        </div>
      </div>
    );
  }
);
export default function UserTools() {
  return (
    <div className="d-flex">
      <a href={() => false}>
        <i className="ri-shopping-cart-line"></i>
      </a>
      <a href={() => false}>
        <i className="ri-user-line"></i>
      </a>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <i className="ri-shopping-cart-line"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu} bsPrefix="dropdown-menu cartMenuWrap">
          {/* <Dropdown.Item eventKey="1">Red</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Orange
          </Dropdown.Item>
          <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
