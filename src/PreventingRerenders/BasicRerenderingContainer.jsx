import React from "react";
import StateVarUpdate from "./StateVarUpdate";
import NonState from "./NonStateVarDoesNotUpdate";

const BasicRerenderingContainer = () => {
  return (
    <div>
      <NonState />
      <StateVarUpdate />
    </div>
  );
};

export default BasicRerenderingContainer;
