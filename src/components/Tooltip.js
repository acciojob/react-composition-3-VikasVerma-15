import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: show ? <div>{text}</div> : children.props.children
  });
}

export default Tooltip;

