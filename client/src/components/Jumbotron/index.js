import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
    <div
      style={{ height: 100, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
    </div>
    </div>
  );
}

export default Jumbotron;
