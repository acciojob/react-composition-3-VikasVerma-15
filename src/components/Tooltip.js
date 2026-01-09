import React, { useState } from "react";

function Tooltip({ text, children, alwaysRender = false }) {
  const [visible, setVisible] = useState(false);

  const containerStyle = {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
  };

  const tooltipStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "black",
    color: "white",
    padding: "5px 8px",
    borderRadius: "4px",
    marginTop: "5px",
    whiteSpace: "nowrap",
    fontSize: "14px",
    zIndex: 10,
    transition: "opacity 0.2s ease-in-out",
  };

  return (
    <div
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



