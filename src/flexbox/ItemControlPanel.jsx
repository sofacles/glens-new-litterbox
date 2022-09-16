import React, { useContext, useState } from "react";
import RadioGroup from "./RadioGroup.jsx";
import { ItemFlexContext } from "./ItemFlexContext";
import ItemFlexShortcutEditableDisplay from "./ItemFlexShortcutEditableDisplay.jsx";

const controlStyle = {
  flex: "1 1 auto",
};

export const ItemControlPanel = ({ itemCount }) => {
  const itemFlexContext = useContext(ItemFlexContext);
  const [defaultFlex, setDefaultFlex] = useState("1 1 auto");
  const [dataAndFlexItemStyles, dispatch] = itemFlexContext;

  const onItemCountChanged = (evt) => {
    dispatch({ type: "UPDATE_COUNT", cargo: { newCount: evt.target.value } });
  };

  const onResetFlex = (evt) => {

    dispatch({
      type: "RESET_ALL_TO",
      cargo: defaultFlex,
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
            onChange={(evt) => {
              setDefaultFlex(evt.target.value);
            }}
            name="resetFlex"
          />
          <input type="button" onClick={onResetFlex} value="reset" />
        </section>
      </div>
    </>
  );
};
