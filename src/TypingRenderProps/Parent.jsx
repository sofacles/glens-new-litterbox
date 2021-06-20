import React from "react";
import HasARenderProp from "./HasARenderProp2";

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
