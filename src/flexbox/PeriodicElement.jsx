import React, { useState } from "react";

const defaultStyle = {
  border: "1px solid black",
  margin: "5px",
  padding: "5px",
};

const symbolStyle = {
  margin: "10px",
  marginBlockStart: "5px",
  marginBlockEnd: "5px",
};

const PeriodicElement = ({ substance, flexItemStyle }) => {
  return (
    <div style={{ ...defaultStyle, flex: flexItemStyle }}>
      <h4 style={symbolStyle}>{substance.symbol}</h4>
      <h5 style={symbolStyle}>{substance.name}</h5>
      <span>{substance.atomic_mass}</span>
    </div>
  );
};

export default PeriodicElement;
