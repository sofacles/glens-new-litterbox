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
  const [flexState, setFlexState] = useState({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  });

  const onFlexDirectionChanged = (newVal) => {
    setFlexState({ ...flexState, flexDirection: newVal });
  };

  const onAlignItemsChanged = (newVal) => {
    setFlexState({ ...flexState, alignItems: newVal });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "12px" }}>
      <RadioGroup
        groupName="flexDirection"
        initialValue={flexState.flexDirection}
        possibleValues={["row", "column"]}
        onNewValue={onFlexDirectionChanged}
      />
      <RadioGroup
        groupName="alignItems"
        initialValue={flexState.alignItems}
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
        <TheList containerStyle={flexState} />
      </div>
    </div>
  );
};

export default Driver;
