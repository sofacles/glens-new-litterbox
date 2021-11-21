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
    alignItems: flexState.alignItems,
  };

  const onFlexDirectionChanged = (newVal) => {
    setFlexState({ ...flexState, flexDir: newVal });
  };

  const onAlignItemsChanged = (newVal) => {
    setFlexState({ ...flexState, alignItems: newVal });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "12px" }}>
      <RadioGroup
        groupName="flexDirection"
        initialValue="row"
        possibleValues={["row", "column"]}
        onNewValue={onFlexDirectionChanged}
      />
      <RadioGroup
        groupName="alignItems"
        initialValue="stretch"
        possibleValues={[
          "base-line",
          "center",
          "flex-start",
          "flex-end",
          "stretch",
        ]}
        onNewValue={onAlignItemsChanged}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TheList containerStyle={flexContainerStyle} />
      </div>
    </div>
  );
};

export default Driver;
