import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>
        <Tooltip text="This is a tooltip" alwaysRender={false}>
          Hover over me
        </Tooltip>
      </h2>

      <p>
        <Tooltip text="Paragraph tooltip" alwaysRender={false}>
          Hover over me to see another tooltip
        </Tooltip>
      </p>

      <button>
        <Tooltip text="Button tooltip" alwaysRender={false}>
          Hover over this button
        </Tooltip>
      </button>
    </div>
  );
}

export default App;
