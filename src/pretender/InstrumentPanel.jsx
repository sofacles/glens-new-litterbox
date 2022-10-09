import React from "react";

const InstrumentPanel = ({ gameOffset }) => {
  //subBoxes are the three boxes of the control panel: lives, pilots map, and controlPanel
  const subBoxStyle = {
    flex: "1 1 auto",
    justifyContent: "stretch",
  };
  const borderWidth = "6px";
  return (
    <div
      style={{
        color: "red",
        display: "flex",
        width: "100%",
        height: "40px",
        borderBottom: `${borderWidth} solid red`,
        background: "#000000",
      }}
      id="instrument-panel"
    >
      <div
        style={{ ...subBoxStyle, borderRight: `${borderWidth} solid red` }}
      ></div>
      <div
        style={{ ...subBoxStyle, borderRight: `${borderWidth} solid red` }}
      ></div>
      <div style={subBoxStyle}>gameOffset: {gameOffset}</div>
    </div>
  );
};

export default InstrumentPanel;