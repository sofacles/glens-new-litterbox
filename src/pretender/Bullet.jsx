import React from "react";

const Bullet = ({ isVisible, x, y }) => {
  return isVisible && <circle cx={x} cy={y} r="2" fill="white" />;
};

export default Bullet;
