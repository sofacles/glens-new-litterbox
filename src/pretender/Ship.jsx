import React from "react";

const Ship = ({ x, y }) => {
  return (
    <svg
      height="342"
      version="1.1"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        overflow: "hidden",
        position: "relative",
        left: "-0.125px",
        top: "-0.617188px",
      }}
    >
      <path
        fill="none"
        stroke="#00ffff"
        d="M83,44L95,44L95,47L101,49L100,53L104,53L106,57L138,60L138,62L152,65L152,69L116,70L115,75L82,75L82,70L74,69L74,65L80,65L79,59L72,59L72,56L77,55Z"
      ></path>
    </svg>
  );
};

export default Ship;
