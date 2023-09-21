import React, { memo } from "react";

const FruitValidator = memo(({ fruit, onValidationComplete }) => {
  console.log(`FruitValidator rendered`);
  return (
    <div>
      <p> Name: {fruit.name}</p>
      <p>
        <button
          onClick={() => {
            onValidationComplete({ OK: fruit.seeds });
          }}
        >
          validate
        </button>
      </p>
    </div>
  );
});

export default FruitValidator;
