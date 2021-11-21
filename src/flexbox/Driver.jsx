import React, { useState } from "react";
import TheList from "./TheList.jsx";
import RadioGroup from "./RadioGroup.jsx";

const item = (substance) => {
  return (
    <div>
      <h4>{substance.number}</h4>
      <h5>{substance.name}</h5>
      <span>{substance.atomic_mass}</span>
    </div>
  );
};

const Driver = () => {
  const [flexState, setFlexState] = useState({ flexDir: "row" });
  const flexContainerStyle = {
    display: "flex",
    flexDirection: flexState.flexDir,
  };

  const onFlexDirectionChanged = (newVal) => {
    setFlexState({ ...flexState, flexDir: newVal });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <RadioGroup
        groupName="flexDirection"
        initialValue="row"
        possibleValues={["row", "column"]}
        onNewValue={onFlexDirectionChanged}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TheList containerStyle={flexContainerStyle} />
      </div>
    </div>
  );
};

export default Driver;
