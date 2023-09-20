import React, { useEffect } from "react";

import "./BasicRerenderingStyle.scss";

const NonState = () => {
  let x = "x";

  let x1 = "x1";
  useEffect(() => {
    x1 = "y1";
  }, []);

  return (
    <div className="basic-rerenderer">
      <div>
        Unless you use some way of maintaining state, updating a variable will
        not rerender your component. value: {x}
        <p>
          <input
            type="button"
            value="try to update x"
            onClick={() => {
              x = "y";
            }}
          />{" "}
        </p>
      </div>
      <div>
        <p>
          How about if useEffect sets the variable? Has x1 been updated to "y1"?
        </p>
        x1: <span style={{ color: "red" }}>{x1}</span> No.
      </div>
    </div>
  );
};

export default NonState;
