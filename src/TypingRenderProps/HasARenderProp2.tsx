import React, { ReactElement } from "react";


export type HasARenderProp2Props = {
  foo(): ReactElement // returns a div in jsx,
};
const HasARenderProp2: React.FC<HasARenderProp2Props> = (props: HasARenderProp2Props) => {
  return <div>{props.foo()}</div>;
};

export default HasARenderProp2;
