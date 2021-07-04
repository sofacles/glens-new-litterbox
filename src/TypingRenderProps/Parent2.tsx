import React from "react";
import HasARenderProp2 from "./HasARenderProp2";
import MyCustomComponent from './MyCustomComponent';
const Parent = () => {
  return (
    <>
      <div>Parent</div>
      <HasARenderProp2
        renderArticle={() => <article>Extreme Weather Warning this weekend</article>}
        renderCustomComponent={() => <MyCustomComponent />}
      />
    </>
  );
};

export default Parent;
