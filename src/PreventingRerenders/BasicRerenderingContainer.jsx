import React from "react";
import StateVarUpdate from "./StateVarUpdate";
import NonState from "./NonStateVarDoesNotUpdate";

// OK, StateVarUpdate has a button in it that will update its own state variable, thus causing it to rerender itself.  But it does not result in
// a rerender of this containing component.

const BasicRerenderingContainer = () => {
  return (
    <div>
      <NonState />
      <StateVarUpdate />
    </div>
  );
};

export default BasicRerenderingContainer;
