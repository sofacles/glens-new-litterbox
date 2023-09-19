import React, { useState } from "react";

const StateVarUpdate = () => {
  const [x, setX] = useState("x");
  return (
    <div>
      This component will rerender when you update the state variable. value:{" "}
      {x}
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
