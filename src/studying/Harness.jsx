import { rotateImage } from "../studying/rotateImage/rotateImage";
import React from "react";

function Harness() {
  let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const rotated = rotateImage(m);

  return <div>Hello</div>;
}

export default Harness;
