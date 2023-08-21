import React from "react";

const Bullet = ({ isVisible, x, y, fill }) => {
  return (
    isVisible && (
      <>
        <rect x={x} y={y} width={5} height={5} fill={fill} />
        <rect x={x - 2} y={y + 2} width={4} height={2} fill="orange" />
        <rect x={x - 8} y={y + 1} width={2} height={2} fill="red" />
        <rect x={x - 16} y={y + 1} width={2} height={2} fill="red" />
      </>
    )
  );
};

export default Bullet;
