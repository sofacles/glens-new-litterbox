import React, { useState } from "react";

const StateVarUpdate = () => {
  const [x, setX] = useState("x");
  return (
    <div>
      This component will rerender itself when you update the state variable,
      but only if you set it to a new value. Repeatedly setX()ing to the same
      value does not cause a rerender. value:{" "}
      <span style={{ color: x === "x" ? "auto" : "red" }}>{x}</span>
      <p>
        <input
          type="button"
          value="update x"
          onClick={() => {
            setX("y");
          }}
        />
      </p>
    </div>
  );
};

export default StateVarUpdate;
