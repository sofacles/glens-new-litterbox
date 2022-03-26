import React from "react";

import { useFruit } from "./UseFruit";
import { Readout } from "./Readout";

const FruitPicker = () => {
  const [state, dispatch] = useFruit();
  const options = state.map((f) => (
    <option key={f.name} selected={f.selected}>
      {f.name}
    </option>
  ));

  return (
    <div>
      <select
        onChange={(evt) => {
          dispatch({
            type: "SET_SELECTED",
            cargo: { name: evt.target.value },
          });
        }}
      >
        {options}
      </select>
      <Readout />
    </div>
  );
};
export { FruitPicker };
