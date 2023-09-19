import React from "react";
import GameWrapper from "./pretender/GameWrapper";
import Stopwatch from "./stop-watch/Stopwatch";
import MainContainer from "./PreventingRerenders/MainContainer";
import { UnrelatedProps } from "./PreventingRerenders/UnrelatedProps";
import BasicRerenderingContainer from "./PreventingRerenders/BasicRerenderingContainer";
import Harness from "./studying/Harness";

import "./App.css";

function App() {
  const foo = 4;
  return (
    <div className="App">
      <MainContainer>
        <UnrelatedProps count={foo} topPx={80} />
      </MainContainer>
    </div>
  );
}

export default App;
