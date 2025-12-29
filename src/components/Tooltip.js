import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  // Styles for the container
  const containerStyle = {
    display: "inline-block",
    position: "relative",
    cursor: "pointer"
  };

  // Styles for the tooltip
  const tooltipStyle = {
    visibility: visible ? "visible" : "hidden",
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    padding: "5px 8px",
    borderRadius: "4px",
    position: "absolute",
    zIndex: 1,
    bottom: "125%", // position above the element
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    fontSize: "14px",
    opacity: visible ? 0.9 : 0, // optional fade effect
    transition: "opacity 0.2s ease-in-out"
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <div style={tooltipStyle}>{text}</div>
    </div>
  );
}

export default Tooltip;
