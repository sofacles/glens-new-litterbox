import React from "react";

const Bullet = ({ isVisible, x, y, fill }) => {
  return (
    isVisible && (
      <>
        <rect x={x} y={y} width={10} height={10} fill={fill} />
        <rect x={x + 5} y={y} width={5} height={2} fill="red" />
      </>
    )
  );
};

export default Bullet;
