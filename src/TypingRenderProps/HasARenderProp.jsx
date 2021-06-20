import React from "react";

const HasARenderProp = ({ foo }) => {
  return <div>{foo()}</div>;
};

export default HasARenderProp;
