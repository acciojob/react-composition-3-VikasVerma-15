import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>

      <Tooltip text="Paragraph tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>

      <Tooltip text="Button tooltip">
        <button>Hover over this button</button>
      </Tooltip>
    </div>
  );
}

export default App;
