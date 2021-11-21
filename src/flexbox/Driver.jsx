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
  const [containerFlexState, setContainerFlexState] = useState({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  });

  const [itemFlexState, setItemFlexState] = useState({ flexBasis: "auto" });

  const [numItems, setNumItems] = useState(4);
  const onItemCountChanged = (evt) => {
    setNumItems(evt.target.value);
  };

  // container
  const onFlexDirectionChanged = (newVal) => {
    setContainerFlexState({ ...containerFlexState, flexDirection: newVal });
  };

  const onAlignItemsChanged = (newVal) => {
    setContainerFlexState({ ...containerFlexState, alignItems: newVal });
  };

  // items
  const onFlexBasisChanged = (newVal) => {
    setItemFlexState({ ...itemFlexState, flexBasis: newVal.target.value });
  };

  const columnStyle = {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    marginRight: "15px",
  };

  console.info(itemFlexState);
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "12px" }}>
      <div style={columnStyle}>
        <h1>Parent</h1>
        <RadioGroup
          groupName="flexDirection"
          initialValue={containerFlexState.flexDirection}
          possibleValues={["row", "column"]}
          onNewValue={onFlexDirectionChanged}
        />
        <RadioGroup
          groupName="alignItems"
          initialValue={containerFlexState.alignItems}
          possibleValues={[
            "base-line",
            "center",
            "flex-start",
            "flex-end",
            "stretch",
          ]}
          onNewValue={onAlignItemsChanged}
        />
      </div>
      <div style={columnStyle}>
        <h1>Children</h1>

        <div>
          <label>flex basis (px, %, ?)</label>
          <input
            type="text"
            onChange={onFlexBasisChanged}
            value={itemFlexState.flexBasis}
            name="flexBasis"
          />
        </div>
        <div>
          <label>items</label>
          <input
            type="text"
            onChange={onItemCountChanged}
            value={numItems}
            name="itemCount"
          />
        </div>
      </div>

      <div style={columnStyle}>
        <TheList
          containerStyle={containerFlexState}
          flexItemStyle={itemFlexState}
          itemCount={numItems}
        />
      </div>
    </div>
  );
};

export default Driver;
