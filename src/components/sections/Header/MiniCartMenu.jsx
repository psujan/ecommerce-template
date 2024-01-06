/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import Button from "../../ui/Button";
import CartImg1 from "../../../assets/images/cart/cart1.jpg";
import styles from "./styles/UserTools.module.scss";

const MiniCartMenu = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={props.style} className={props.className}>
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
            <div className="ps-3 pe-2">
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
            <div className="ps-3 pe-2">
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
            <div className="ps-3 pe-2">
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
});

export default MiniCartMenu;
