import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { KeyBindingContext } from "./hooks/useKeyBindings";
import { UPDATE_KEY_BINDING } from "./Constants";
import { ItemFlexContext } from "../flexbox/ItemFlexContext";
import KeyMappingEditor from "./KeyMappingEditor";
import { KeyBindingType } from "./types";

const KeyMappingsPane = () => {
  const { state, dispatch } = useContext(KeyBindingContext);
  const { bindings } = state;
  const { changeShipDirection, shipUp, shipDown, thrust } = bindings;
  const [isEditing, setIsEditing] = useState(false);
  const [keyBeingEdited, setKeyBeingEdited] = useState<string | undefined>(
    undefined
  );

  const refToPaneDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refToPaneDiv.current) {
      refToPaneDiv.current.focus();
    }
  }, []);

  const toggleEditModeFor = (keyBinding: KeyBindingType) => {
    setKeyBeingEdited(keyBinding.name);
    setIsEditing(true);
    refToPaneDiv.current?.focus();
  };
  return (
    <div
      ref={refToPaneDiv}
      style={{
        backgroundColor: "#000",
        color: "red",
        height: "800px",
        width: "100%",
      }}
      onKeyDown={(evt) => {
        if (isEditing) {
          dispatch({
            type: UPDATE_KEY_BINDING,
            cargo: { key: keyBeingEdited, value: evt.key },
          });
          setKeyBeingEdited(undefined);
        }
      }}
      tabIndex={0}
    >
      <h1>Mappings</h1>
      <KeyMappingEditor
        keyBinding={thrust}
        isEditing={thrust.name === keyBeingEdited}
        toggleEditMode={toggleEditModeFor}
      />
      <KeyMappingEditor
        keyBinding={shipUp}
        isEditing={shipUp.name === keyBeingEdited}
        toggleEditMode={toggleEditModeFor}
      />

      <KeyMappingEditor
        keyBinding={shipDown}
        isEditing={shipDown.name === keyBeingEdited}
        toggleEditMode={toggleEditModeFor}
      />
      <KeyMappingEditor
        keyBinding={changeShipDirection}
        isEditing={changeShipDirection.name === keyBeingEdited}
        toggleEditMode={toggleEditModeFor}
      />
      <footer>
        <Link to="/" style={{ color: "red" }}>
          Back to game
        </Link>
      </footer>
    </div>
  );
};

export default KeyMappingsPane;
