import React, { useCallback, useMemo, useState } from "react";
import FruitValidator from "./FruitValidator";

// A child component takes some kind of object as a prop and decides whether or not it's valid data.  It then will call its other
// prop: an onValidationComplete callback.

const Parent = () => {
  console.log(`parent rendered`);
  //Maybe I need to put this in state?  Yeah.  This creates a mew object every time this thing is rerendered.
  //   const strawberry = {
  //     name: "Strawberry",
  //     nSeeds: 0,
  //   };

  const [fruit] = useState({
    name: "Strawberry",
    nSeeds: 0,
  });
  //I just have this here so I can force Parent to rerender
  const [macGuffin, setMacGuffin] = useState(1);

  const myValidationFxn = useCallback((vResult) => {
    console.log(
      `the validation cb in the parent is being called with ${JSON.stringify(
        vResult
      )}`
    );
  }, []);

  return (
    <div>
      Parent
      <p>
        <button
          onClick={() => {
            //this will force a rerender, also of the Fruit Validator
            setMacGuffin((old) => {
              return old + 1;
            });
          }}
        >
          MacGuffinate Me
        </button>
      </p>
      <FruitValidator fruit={fruit} onValidationComplete={myValidationFxn} />
    </div>
  );
};

export default Parent;
