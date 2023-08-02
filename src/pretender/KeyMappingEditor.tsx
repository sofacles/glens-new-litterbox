import React, { useState } from "react";
import { KeyBindingContext } from "./hooks/useKeyBindings";
import { KeyBindingType } from "./types";

type toggleEditModeType = (key: string) => void;
type KeyMappingEditorProps = {
  toggleEditMode: toggleEditModeType;
  keyBinding: KeyBindingType;
  isEditing: boolean;
};

const KeyMappingEditor = (props: KeyMappingEditorProps) => {
  const { toggleEditMode, isEditing, keyBinding } = props;
  const { name, mappedKey } = keyBinding;

  const rowStyle = {
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <div style={rowStyle}>
      <span>{name}</span>
      {!isEditing && (
        <>
          <span>{mappedKey}</span>
          <button
            onClick={() => {
              toggleEditMode(name);
            }}
          >
            edit
          </button>
        </>
      )}
      {isEditing && <span>OK, press the key for {name}</span>}
    </div>
  );
};

export default KeyMappingEditor;
