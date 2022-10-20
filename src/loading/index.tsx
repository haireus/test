import React from "react";
import "./style.css";

export default function Spin() {
  return (
    <div className="loading-container">
      <span className="loader"></span>

      <div className="loading-text">Loading ...</div>
    </div>
  );
}
