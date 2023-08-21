import React from "react";
import { SHIP_HEIGHT } from "./Constants";

const Bullet = ({ direction, isVisible, x, y, fill }) => {
  let trailingCorrection1 = 2;
  let trailingCorrection2 = 8;
  let trailingCorrection3 = 16;
  const bulletWidth = 4;
  if (direction === "left") {
    trailingCorrection1 *= -1;
    trailingCorrection2 *= -1;
    trailingCorrection3 *= -1;
  }
  return (
    isVisible && (
      <>
        <rect x={x} y={y} width={5} height={5} fill={fill} />
        <rect
          x={x - trailingCorrection1}
          y={y + bulletWidth / 2}
          width={bulletWidth}
          height={bulletWidth / 2}
          fill="orange"
        />
        <rect
          x={x - trailingCorrection2}
          y={y + bulletWidth / 2}
          width={bulletWidth}
          height={bulletWidth / 2}
          fill="red"
        />
        <rect
          x={x - trailingCorrection3}
          y={y + bulletWidth / 2}
          width={bulletWidth}
          height={bulletWidth / 2}
          fill="red"
        />
      </>
    )
  );
};

export default Bullet;
