// This is the outermost component in this folder.  I am adding it so I can remember the trick of avoiding rerenders by putting components that really
// shouldn't rerender (because the state that's being updated has nothing to do with their props) in as {children}

import MainContainer from "./ComponentsInTheChildrenCollectionDoNotGetRerendered/MainContainer";
import { UnrelatedProps } from "./ComponentsInTheChildrenCollectionDoNotGetRerendered/UnrelatedProps";
import BasicRerenderingContainer from "./UseStateCausesRerenders/BasicRerenderingContainer";
//import Parent from "./FunctionsCauseRerenders/Parent";
import Parent from "./UsingUseMemoInsteadOfMemo/Parent";

const Wrapper = () => {
  return (
    <>
      <Parent />
    </>
  );
};

export default Wrapper;
