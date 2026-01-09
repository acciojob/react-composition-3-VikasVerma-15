import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      
      <h2 className="tooltip">
        <Tooltip text="This is a tooltip">
          This is a tooltip
        </Tooltip>
      </h2>

      <p className="tooltip">
        <Tooltip text="This is another tooltip">
          This is a another tooltip
        </Tooltip>
      </p>

      <button className="tooltip">
        <Tooltip text="Button tooltip">
          Hover over me to see another tooltip
        </Tooltip>
      </button>

    </div>
  );
}

export default App;
