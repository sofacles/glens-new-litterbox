import React, { useState } from "react";
import { KeyBindingContext } from "./hooks/useKeyBindings";

type toggleEditModeType = (key: string) => void;
type KeyMappingEditorProps = {
  toggleEditMode: toggleEditModeType;
  commandName: string;
  isEditing: boolean;
  mappedKey: string;
};
//TODO show the updated key mapping after edit

const KeyMappingEditor = (props: KeyMappingEditorProps) => {
  const { toggleEditMode, commandName, isEditing, mappedKey } = props;

  const rowStyle = {
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <div style={rowStyle}>
      <span>{commandName}</span>
      {!isEditing && (
        <>
          <span></span>
          <button
            onClick={() => {
              toggleEditMode(commandName);
            }}
          >
            edit
          </button>
        </>
      )}
      {isEditing && <span>OK, press the key for {commandName}</span>}
    </div>
  );
};

export default KeyMappingEditor;
