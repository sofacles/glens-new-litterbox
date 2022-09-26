import React from "react";
import Ship from "./Ship";

const MainScreen = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        background: "#000",
        position: "absolute",
      }}
    >
      <Ship x={200} y={200} />
    </div>
  );
};

export default MainScreen;
