import React, { useContext } from "react";
import { ItemFlexContext } from "./ItemFlexContext";

// Shows a text box for each flexStyle in the collection
const ItemFlexShortcutEditableDisplay = () => {
  const [dataAndFlexItemStyles, dispatch] = useContext(ItemFlexContext);

  const theDivs = dataAndFlexItemStyles.map((obj, index) => (
    // {
    //   physicalData: datum,
    //   flex: defaultItemStyle,
    //   }
    <div key={index}>
      <input
        type="text"
        value={obj.style.flex}
        name={`flexStr${index}`}
        onChange={(evt) => {
          dispatch({
            type: "UPDATE_FLEX_AT_INDEX",
            cargo: {
              index: index,
              flex: evt.target.value,
            },
          });
        }}
      />
    </div>
  ));
  return (
    <div>
      <h2>Item flexes</h2>
      {theDivs}
    </div>
  );
};

export default ItemFlexShortcutEditableDisplay;
