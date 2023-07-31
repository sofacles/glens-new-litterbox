import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { KeyBindingContext } from "./hooks/useKeyBindings";
import { UPDATE_KEY_BINDING } from "./Constants";

const KeyMappings = () => {
  const foo = useContext(KeyBindingContext);
  const { state, dispatch } = foo;
  return (
    <div>
      <h1>Mappings</h1>
      <button
        onClick={() => {
          dispatch({
            type: UPDATE_KEY_BINDING,
            cargo: { key: "thrust", value: "k" },
          });
        }}
      >
        Set thrust to to k
      </button>
      <footer>
        <Link to="/">Back to game</Link>
      </footer>
    </div>
  );
};

export default KeyMappings;
