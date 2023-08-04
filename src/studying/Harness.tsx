import React from "react";
import { ZigZag } from "./ZigZagText/ZigZag";

const Harness = () => {
  ZigZag("a", 1);
  return <div>Test Harness</div>;
};

export default Harness;
