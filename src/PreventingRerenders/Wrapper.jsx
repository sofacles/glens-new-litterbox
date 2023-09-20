// This is the outermost component in this folder.  I am adding it so I can remember the trick of avoiding rerenders by putting components that really
// shouldn't rerender (because the state that's being updated has nothing to do with their props) in as {children}

import MainContainer from "./ComponentsInTheChildrenCollectionDoNotGetRerendered/MainContainer";
import { UnrelatedProps } from "./ComponentsInTheChildrenCollectionDoNotGetRerendered/UnrelatedProps";
import BasicRerenderingContainer from "./UseStateCausesRerenders/BasicRerenderingContainer";

const Wrapper = () => {
  const foo = 4;
  return (
    <>
      <MainContainer>
        <UnrelatedProps count={foo} className="childOfApp">
          child of App does NOT get rerendered
        </UnrelatedProps>
      </MainContainer>
      {/* <BasicRerenderingContainer /> */}
    </>
  );
};

export default Wrapper;
