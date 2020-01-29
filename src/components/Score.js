import React from "react";

function Score({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", textAlign: "center" }}
      className="row"
    >
        { children }
    </div>
  );
}

export default Score;
