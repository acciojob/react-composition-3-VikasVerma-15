import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h2 className="tooltip">
        <Tooltip text="This is a tooltip">
          Hover over me
        </Tooltip>
      </h2>

      <p className="tooltip">
        <Tooltip text="This is another tooltip">
          Hover over me to see another tooltip
        </Tooltip>
      </p>

      {/* <button className="tooltip">
        <Tooltip text="Button tooltip">
          Hover over me to see another tooltip
        </Tooltip>
      </button> */}
    </div>
  );
}

export default App;