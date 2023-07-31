import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { KeyBindingContext } from "./hooks/useKeyBindings";
import { UPDATE_KEY_BINDING } from "./Constants";
import { ItemFlexContext } from "../flexbox/ItemFlexContext";

const KeyMappings = () => {
  const { state, dispatch } = useContext(KeyBindingContext);
  const [isEditing, setIsEditing] = useState(false);
  const [keyBeingEdited, setKeyBeingEdited] = useState<string | undefined>(
    undefined
  );

  const rowStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  return (
    <div
      style={{ backgroundColor: "#aaaaff", height: "800px", width: "100%" }}
      onKeyDown={(evt) => {
        if (isEditing) {
          dispatch({
            type: UPDATE_KEY_BINDING,
            cargo: { key: keyBeingEdited, value: evt.key },
          });
          setIsEditing(false);
        }
      }}
      tabIndex={0}
    >
      <h1>Mappings</h1>
      <div style={rowStyle}>
        <span>thrust</span>
        {!isEditing && (
          <>
            <span>{state.bindings.thrust}</span>
            <button
              onClick={() => {
                setKeyBeingEdited("thrust");
                setIsEditing(true);
              }}
            >
              edit
            </button>
          </>
        )}
        {isEditing && <span>OK, press the key for thrust</span>}
      </div>
      <footer>
        <Link to="/">Back to game</Link>
      </footer>
    </div>
  );
};

export default KeyMappings;
