import React from "react";

const Bullet = ({ isVisible, x, y, fill }) => {
  console.log(`bullet.x is ${x}`);
  return (
    isVisible && (
      <>
        <rect x={x} y={y} width={5} height={5} fill={fill} />
        <rect x={x + 5} y={y} width={5} height={2} fill="red" />
      </>
    )
  );
};

export default Bullet;
