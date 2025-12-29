import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const containerStyle = {
    display: "inline-block",
    position: "relative",
    cursor: "pointer"
  };

  const tooltipStyle = {
    visibility: visible ? "visible" : "hidden",
    opacity: visible ? 0.9 : 0,
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    padding: "5px 8px",
    borderRadius: "4px",
    position: "absolute",
    zIndex: 1,
    bottom: "125%",
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    fontSize: "14px",
    transition: "opacity 0.2s ease-in-out"
  };

  return (
    <div
      className="tooltip"
      style={containerStyle}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <div className="tooltiptext" style={tooltipStyle}>{text}</div>
    </div>
  );
}

export default Tooltip;

