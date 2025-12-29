import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h2 className="tooltip">
        <Tooltip text="Tooltip for heading">Hover over me</Tooltip>
      </h2>

      <p className="tooltip">
        <Tooltip text="Tooltip for paragraph">Hover over me to see another tooltip</Tooltip>
      </p>

      <button className="tooltip">
        <Tooltip text="Tooltip for button">Hover over this button</Tooltip>
      </button>
    </div>
  );
}

export default App;
