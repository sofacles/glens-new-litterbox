import React, { useState } from "react";

// shows a text box for each flexStyle in the collection
const ItemFlexShortcutEditableDisplay = (props) => {
  const { flexStrings, onUpdate } = props;

  const [localValues, setLocalValues] = useState([...flexStrings]);

  const theDivs = localValues.map((flexStr, index) => (
    <div key={index}>
      <input
        type="text"
        value={flexStr}
        name={`flexStr${index}`}
        onChange={(evt) => {
          const newList = [...localValues];
          newList[index] = evt.target.value;
          setLocalValues(newList);
          onUpdate(newList);
        }}
      />
    </div>
  ));
  return <div>{theDivs}</div>;
};

export default ItemFlexShortcutEditableDisplay;
