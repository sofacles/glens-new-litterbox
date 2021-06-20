import React from "react";
import HasARenderProp, { HasARenderProp2Props } from "./HasARenderProp2";
import Onion from './Onion';
const Parent = () => {
  return (
    <>
      <div>Parent</div>
      <HasARenderProp
        foo={() => <article>this article added by foo prop</article>}
      />
    </>
  );
};

export default Parent;
