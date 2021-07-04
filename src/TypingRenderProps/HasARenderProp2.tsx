import React, { ReactElement } from "react";


export type HasARenderProp2Props = {
  renderArticle(): ReactElement // returns a div in jsx, I could also use `: void`
  //I have to declare this as void?  (neither ReactElement nor React.FC work )
  renderCustomComponent(): ReactElement
};
const HasARenderProp2: React.FC<HasARenderProp2Props> = (props: HasARenderProp2Props) => {
  return <div>{props.renderArticle()} {props.renderCustomComponent()}</div>;
};

export default HasARenderProp2;
