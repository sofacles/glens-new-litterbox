import React from "react";

const Bullet = ({ isVisible, x, y, fill }) => {
  return isVisible && <circle cx={x} cy={y} r="8" fill={fill} />;
};

export default Bullet;
