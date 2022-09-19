import React, { useContext, useState } from "react";
import RadioGroup from "./RadioGroup.jsx";
import { ItemFlexContext } from "./ItemFlexContext";
import ItemFlexShortcutEditableDisplay from "./ItemFlexShortcutEditableDisplay.jsx";
import { TestPageLayoutContext } from "./TestPageLayoutContext.jsx";

const controlStyle = {
  flex: "1 1 auto",
};

export const ItemControlPanel = ({ itemCount }) => {
  const itemFlexContext = useContext(ItemFlexContext);
  const [defaultFlex, setDefaultFlex] = useState("1 1 auto");
  const [dataAndFlexItemStyles, dispatch] = itemFlexContext;

  const { initialListOrientation, dispatch2 } = useContext(
    TestPageLayoutContext
  );

  const onItemCountChanged = (evt) => {
    dispatch({ type: "UPDATE_COUNT", cargo: { newCount: evt.target.value } });
  };

  const onResetFlex = (evt) => {
    dispatch({
      type: "RESET_ALL_TO",
      cargo: defaultFlex,
    });
  };

  const commonStyle = { display: "flex", alignItems: "stretch" };

  const rowListStyle = { ...commonStyle, width: "100%" };
  const columnListStyle = { ...commonStyle, flexDirection: "column" };

  return (
    <div
      style={{
        padding: "10px",
        width:
          initialListOrientation.listOrientation === "row" ? "100%" : "33%",
      }}
    >
      <h1>Item Control Panel</h1>
      <div
        style={
          initialListOrientation.listOrientation === "row"
            ? rowListStyle
            : columnListStyle
        }
      >
        <section style={controlStyle}>
          <ItemFlexShortcutEditableDisplay />
        </section>
        <section style={controlStyle}>
          <h3>count</h3>
          <input
            type="text"
            onChange={onItemCountChanged}
            name="itemCount"
            value={dataAndFlexItemStyles.length}
          />
        </section>
        <section style={controlStyle}>
          <h3>reset all to:</h3>
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
    </div>
  );
};
