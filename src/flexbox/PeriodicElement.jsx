import React, { useState } from "react";

const defaultStyle = {
  border: "1px solid black",
  margin: "5px",
  padding: "5px",
};

const PeriodicElement = ({ substance, flexItemStyle }) => {
  return (
    <div style={{ ...defaultStyle, flex: flexItemStyle }}>
      <h4>{substance.number}</h4>
      <h5>{substance.name}</h5>
      <span>{substance.atomic_mass}</span>
    </div>
  );
};

export default PeriodicElement;
