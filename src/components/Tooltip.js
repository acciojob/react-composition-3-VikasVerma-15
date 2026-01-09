import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* isolate children text */}
      <span>{children}</span>

      {visible && (
        <div className="tooltiptext">
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
