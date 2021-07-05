import React from "react";
import ToggleContent from "./ToggleContent";
import MyCustomComponent from "./MyCustomComponent";

const Parent = () => {
  return (
    <div>
      <h1>parent</h1>
      <ToggleContent
        toggle={(show) => {
          return <button onClick={show}>show</button>;
        }}
        content={(hide) => <MyCustomComponent hide={hide} />}
      ></ToggleContent>
    </div>
  );
};

export default Parent;
