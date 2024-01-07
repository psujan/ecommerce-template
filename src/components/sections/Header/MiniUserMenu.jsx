/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const MiniUserMenu = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={props.style} className={props.className}>
      <ul>
        <li>
          <a href={() => false}><span><i className="ri-login-circle-line pe-2"></i></span>Login</a>
        </li>
        <li>
          <a href={() => false}><span><i className="ri-history-line pe-2"></i></span>Orders</a>
        </li>
        <li>
          <a href={() => false}><span><i className="ri-checkbox-line pe-2"></i></span>Saved Items</a>
        </li>
        <li>
          <a href={() => false}><span><i className="ri-settings-2-line pe-2"></i></span>Settings</a>
        </li>
      </ul>
    </div>
  );
});

export default MiniUserMenu;
