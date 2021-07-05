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
      <pre>I want to understand how I should type render functions. This is a simplification of the PageHeader slots idea.
        I can't seem to find a page that shows somebody doing this kind of thing, so I think I'll go back to trying to type that
        ToggleContent component.</pre>
    </>
  );
};

export default Parent;
