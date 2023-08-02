import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { KeyBindingContext } from "./hooks/useKeyBindings";
import { UPDATE_KEY_BINDING } from "./Constants";
import { ItemFlexContext } from "../flexbox/ItemFlexContext";
import KeyMappingEditor from "./KeyMappingEditor";

const KeyMappingsPane = () => {
  const { state, dispatch } = useContext(KeyBindingContext);
  const { bindings } = state;
  const { shipUp, shipDown, thrust } = bindings;
  const [isEditing, setIsEditing] = useState(false);
  const [keyBeingEdited, setKeyBeingEdited] = useState<string | undefined>(
    undefined
  );
  return (
    <div
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
        toggleEditMode={(key) => {
          setKeyBeingEdited(key);
          setIsEditing(true);
        }}
      />
      <KeyMappingEditor
        keyBinding={shipUp}
        isEditing={shipUp.name === keyBeingEdited}
        toggleEditMode={(key) => {
          setKeyBeingEdited(key);
          setIsEditing(true);
        }}
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
