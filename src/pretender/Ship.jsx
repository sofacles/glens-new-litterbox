import React from "react";

const Ship = ({ x, y }) => {
  return (
    <rect data-testid="ship" x={x} y={y} width="30" height={8} fill="#678A32" />
  );
};

export default Ship;
