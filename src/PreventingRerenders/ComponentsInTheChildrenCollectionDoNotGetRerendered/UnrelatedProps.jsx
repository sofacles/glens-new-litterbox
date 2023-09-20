// If a child component's props aren't part of the object that's being refreshed up in the main container,
// does it get rerendered too?

// Yes
import React from "react";

export const UnrelatedProps = ({ children, count, className = "" }) => {
  return (
    <div className={className}>
      count: {count}
      <div>{children}</div>
    </div>
  );
};
