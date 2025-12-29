import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>
        <Tooltip text="Tooltip for heading">
          Hover over me
        </Tooltip>
      </h2>

      <p>
        <Tooltip text="Tooltip for paragraph">
          Hover over me to see another tooltip
        </Tooltip>
      </p>
    </div>
  );
}

export default App;
