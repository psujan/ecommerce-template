/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const MiniUserMenu = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={props.style} className={props.className}>
      <ul>
        <li className="py-2">
          <a href={() => false}>Login</a>
        </li>
        <li className="py-2">
          <a href={() => false}>Purchase</a>
        </li>
        <li className="py-2">
          <a href={() => false}>Track Order</a>
        </li>
      </ul>
    </div>
  );
});

export default MiniUserMenu;
