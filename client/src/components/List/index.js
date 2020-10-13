import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="col-lg-12">
    <div className="col-md-12 list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
    </div>

  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
