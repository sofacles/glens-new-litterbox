import React, { useState } from "react";

const RadioGroup = (props) => {
  const { groupName, initialValue, possibleValues, onNewValue } = props;

  const [currentValue, setCurrentValue] = useState(initialValue);
  const onValueChanged = (evt) => {
    setCurrentValue(evt.target.value);
    onNewValue(evt.target.value);
  };

  const rowStyle = {
    alignSelf: "flex-start",
  };

  const theRows = possibleValues.map((val) => (
    <div style={rowStyle}>
      <input
        checked={currentValue === val}
        type="radio"
        value={val}
        name={val}
        onChange={onValueChanged}
      />
      <label>{val}</label>
    </div>
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h3>{groupName}:</h3>
      {theRows}
    </div>
  );
};

export default RadioGroup;
