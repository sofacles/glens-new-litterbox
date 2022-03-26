import React from "react";

import { useFruit } from "./UseFruit";

const Readout = () => {
  const [state, dispatch] = useFruit();
  let selectedFruit;
  state.map((f) => {
    if (f.selected) {
      selectedFruit = f.name;
    }
  });

  return <div>Selected: {selectedFruit} </div>;
};
export { Readout };
