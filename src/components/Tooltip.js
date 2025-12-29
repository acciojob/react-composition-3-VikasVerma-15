import React, { useState } from "react";

function Tooltip({ text, children, alwaysRender = false }) {
  const [visible, setVisible] = useState(false);

  const containerStyle = {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
  };

  const tooltipStyle = {
    visibility: visible ? "visible" : "hidden",
    opacity: visible ? 1 : 0,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "5px 8px",
    borderRadius: "4px",
    position: "absolute",
    bottom: "125%",
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    fontSize: "14px",
    zIndex: 10,
    transition: "opacity 0.2s ease-in-out",
  };

  return (
    <div
      className="tooltip"
      style={containerStyle}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {(alwaysRender || visible) && (
        <div className="tooltiptext" style={tooltipStyle}>
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;

