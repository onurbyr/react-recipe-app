import React from "react";
import "./Spinner.css";

const Spinner = ({ color, height }) => {
  return (
    <div style={{ height: height }} className="spinner-parent">
      <div className="lds-facebook">
        <div style={{ background: color }}></div>
        <div style={{ background: color }}></div>
        <div style={{ background: color }}></div>
      </div>
    </div>
  );
};

export default Spinner;
