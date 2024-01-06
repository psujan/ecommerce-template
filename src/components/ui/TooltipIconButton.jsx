/* eslint-disable react/prop-types */
import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


// eslint-disable-next-line react/display-name
export const TooltipIconButton = React.forwardRef(
  ({ onClick, title, className , iconClass }, ref) => (
    <OverlayTrigger
      placement="right"
      delay={{ show: 200, hide: 200 }}
      overlay={<Tooltip>{title}</Tooltip>}
    >
      <a
        href=""
        className={className}
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        <i className={iconClass}></i>
      </a>
    </OverlayTrigger>
  )
);
