// If a child component's props aren't part of the object that's being refreshed up in the main container,
// does it get rerendered too?

// Yes
import React from "react";

export const UnrelatedProps = ({ count, topPx = 0 }) => {
  return (
    <div style={{ position: "absolute", left: "0", top: `${topPx}px` }}>
      count: {count}
    </div>
  );
};
