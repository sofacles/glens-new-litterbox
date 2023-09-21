import React, { useCallback, useMemo, useState } from "react";
import FruitValidator from "./FruitValidator";

const Parent = () => {
  console.log(`parent rendered`);

  const [strawberry, setStrawberry] = useState({
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

  // Rather than putting the FruitValidator right into the return value (and wrapping the constructor for the FruitValidator in a
  // React.memo(...) call), you can do the memo-izing in the parent component by writing a fxn that returns a <FruitValidator /> and
  // passing that to useMemo
  const myMemoizedFruitValidatorFactory = useMemo(
    () => (
      <FruitValidator
        fruit={strawberry}
        onValidationComplete={myValidationFxn}
      />
    ),
    [strawberry.nSeeds, myValidationFxn]
  );

  return (
    <div>
      Parent
      <p>
        <button
          onClick={() => {
            //this will force a rerender, also of the Fruit Validator if we don't take steps
            setMacGuffin((old) => {
              return old + 1;
            });
          }}
        >
          MacGuffinate Me
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            //this will force a rerender, also of the Fruit Validator if we don't take steps
            setStrawberry((oldBerry) => {
              return {
                ...oldBerry,
                nSeeds: oldBerry.nSeeds + 1,
              };
            });
          }}
        >
          Increment the number of seeds in the strawberry.
        </button>
      </p>
      {myMemoizedFruitValidatorFactory}
    </div>
  );
};

export default Parent;
