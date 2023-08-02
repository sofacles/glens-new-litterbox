import React, { useState } from "react";
import { KeyBindingContext } from "./hooks/useKeyBindings";
import { KeyBindingType } from "./types";

type toggleEditModeType = (keyBinding: KeyBindingType) => void;
type KeyMappingEditorProps = {
  toggleEditMode: toggleEditModeType;
  keyBinding: KeyBindingType;
  isEditing: boolean;
};

const KeyMappingEditor = (props: KeyMappingEditorProps) => {
  const { toggleEditMode, isEditing, keyBinding } = props;
  const { name, mappedKey } = keyBinding;
  const normalizeKeyName = (key: string) => {
    if (key == " ") {
      return "space";
    }
    return key;
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  };
  return (
    <div style={rowStyle}>
      <span>{name}</span>
      {!isEditing && (
        <>
          <span>{normalizeKeyName(mappedKey)}</span>
          <button
            onClick={() => {
              toggleEditMode(keyBinding);
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
