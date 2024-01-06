/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import Button from "../../ui/Button";
// import CartImg1 from "../../../assets/images/cart/cart1.jpg";
import styles from "./styles/UserTools.module.scss";
import { TooltipIconButton } from "../../ui/TooltipIconButton";
import MiniCartMenu from "./MiniCartMenu";
import MiniUserMenu from "./MiniUserMenu";

// eslint-disable-next-line react/display-name, react/prop-types
export const CartToggle = React.forwardRef(({ onClick }, ref) => (
  <TooltipIconButton
    onClick={onClick}
    ref={ref}
    title="Cart"
    className="dropdown-icon-btn"
    iconClass="ri ri-shopping-cart-line"
  />
));

export const UserToggle = React.forwardRef(({ onClick }, ref) => (
  <TooltipIconButton
    onClick={onClick}
    ref={ref}
    title="Account"
    className="dropdown-icon-btn"
    iconClass="ri ri-user-line"
  />
));

export const CartMenu = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <MiniCartMenu className={props.className} ref={ref} style={props.style} />
  );
});

export default function UserTools() {
  return (
    <div className="d-flex gap-3">
      <Dropdown>
        <Dropdown.Toggle as={CartToggle} />
        <Dropdown.Menu
          as={MiniCartMenu}
          bsPrefix={`dropdown-menu ${styles.cartMenuWrap}`}
        />
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle as={UserToggle} />
        <Dropdown.Menu
          as={MiniUserMenu}
          bsPrefix={`dropdown-menu ${styles.userMenuWrap}`}
        />
      </Dropdown>
    </div>
  );
}
