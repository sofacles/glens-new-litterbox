import React, { useContext, useState } from "react";
import RadioGroup from "./RadioGroup.jsx";
import { FlexAndDataContext } from "./FlexAndDataContext";
import ItemFlexShortcutEditableDisplay from "./ItemFlexShortcutEditableDisplay.jsx";

const controlStyle = {
  flex: "1 1 auto",
};

export const ItemControlPanel = ({ itemCount }) => {
  const flexAndDataContext = useContext(FlexAndDataContext);
  const [defaultFlex, setDefaultFlex] = useState("1 1 auto");
  const [dataAndFlexItemStyles, dispatch] = flexAndDataContext;

  const onItemCountChanged = (evt) => {
    dispatch({ type: "UPDATE_COUNT", cargo: { newCount: evt.target.value } });
  };

  const onResetFlex = (evt) => {
    setDefaultFlex(evt.target.value);
    dispatch({
      type: "RESET_ALL_TO",
      cargo: { defaultFlex: evt.target.value },
    });
  };

  return (
    <>
      <h1>Stuff on the children</h1>
      <div style={{ display: "flex", alignItems: "stretch", width: "100%" }}>
        <section style={controlStyle}>
          <ItemFlexShortcutEditableDisplay />
        </section>
        <section style={controlStyle}>
          <h2>count</h2>
          <input
            type="text"
            onChange={onItemCountChanged}
            name="itemCount"
            value={dataAndFlexItemStyles.length}
          />
        </section>
        <section style={controlStyle}>
          <h2>reset all to:</h2>
          <input
            type="text"
            value={defaultFlex}
            onChange={onResetFlex}
            name="resetFlex"
          />
        </section>
      </div>
    </>
  );
};
