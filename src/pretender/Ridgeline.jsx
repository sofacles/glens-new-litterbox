import React from "react";
import peaks from "./MountainData";

// Show one line segment of the mountains
const Ridgeline = (props) => {
  return (
    <svg
      style={{ color: "green" }}
    >{`props.screenWidth: ${props.screenWidth}`}</svg>
  );
};

export default Ridgeline;
