import React, { useState } from "react";
import TheList from "./TheList.jsx";
import { elements } from "../Elements";
import RadioGroup from "./RadioGroup.jsx";
import ItemFlexShortcutEditableDisplay from "./ItemFlexShortcutEditableDisplay.jsx";
import { useFlexAndDataReducer } from "./useFlexAndDataReducer";

const Driver = () => {
  const [containerFlexState, setContainerFlexState] = useState({
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    alignItems: "stretch",
  });

  const [itemFlexState, setItemFlexState] = useState({ flex: "1 1 auto" });
  const [dataAndFlexItemStyles, dispatch] = useFlexAndDataReducer(elements, 4);

  const onItemCountChanged = (evt) => {
    dispatch({ type: "update_count", cargo: { newCount: evt.target.value } });
  };

  // container
  const onFlexDirectionChanged = (newVal) => {
    setContainerFlexState({ ...containerFlexState, flexDirection: newVal });
  };

  const onAlignItemsChanged = (newVal) => {
    setContainerFlexState({ ...containerFlexState, alignItems: newVal });
  };

  const onFlexWrapChanged = (newVal) => {
    setContainerFlexState({
      ...containerFlexState,
      flexWrap: newVal,
    });
  };

  // items

  const onItemFlexChanged = (newVal) => {
    setItemFlexState({ ...itemFlexState, flex: newVal.target.value });
  };

  const columnStyle = {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    marginRight: "15px",
  };

  const startingFlexStrings = Array.from({ length: 4 }).map(
    (_, i) => "1 1 auto"
  );
  const [flexStrings, setFlexStrings] = useState(startingFlexStrings);
  const onFlexStringsChanged = (newFlexStrings) => {
    setFlexStrings(newFlexStrings);
  };
  return (
    <div>
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
          <RadioGroup
            groupName="flexWrap"
            initialValue={containerFlexState.flexWrap}
            possibleValues={["no-wrap", "wrap", "wrap-reverse"]}
            onNewValue={onFlexWrapChanged}
          />
        </div>
        <div style={columnStyle}>
          <h1>Children</h1>

          <div>
            <label>flex</label>
            <input
              type="text"
              onChange={onItemFlexChanged}
              value={itemFlexState.flex}
              name="itemFlex"
            />
          </div>
          <div>
            <label>items</label>
            <input
              type="text"
              onChange={onItemCountChanged}
              value={dataAndFlexItemStyles.length}
              name="itemCount"
            />
          </div>
        </div>

        <div style={columnStyle}>
          <TheList
            containerStyle={containerFlexState}
            elements={dataAndFlexItemStyles}
            flexItemStyle={itemFlexState}
            flexItemStyles={flexStrings}
            itemCount={dataAndFlexItemStyles.length} //should the list care about itemCount?
          />
        </div>
      </div>
      {/* <ItemFlexShortcutEditableDisplay
        flexStrings={flexStrings}
        onUpdate={onFlexStringsChanged}
      /> */}
    </div>
  );
};

export default Driver;
