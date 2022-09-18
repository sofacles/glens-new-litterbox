import React, { useContext } from "react";
import TheList from "./TheList.jsx";
import { ContainerControlPanel } from "./ContainerControlPanel";
import { ItemControlPanel } from "./ItemControlPanel.jsx";
import { TestPageLayoutContext } from "./TestPageLayoutContext";

const TestPage = () => {
  //When the list of flexed items horizontal, just keep the layout like I have it (though maybe I should abandon the "Container control panel up top and item
  // control panel below" thing anyway).  If it's vertical, the control panels become blades!  Or maybe just lists on either side of the list.
  const testPageStyleNormal = {
    backgroundColor: "green",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    marginRight: "15px",
  };

  //as in the LIST is tall, not the test page layout
  const testPageStyleTall = {
    backgroundColor: "pink",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
  };

  const { currentListOrientation } = useContext(TestPageLayoutContext);

  return (
    <div
      style={
        currentListOrientation.listOrientation === "row"
          ? testPageStyleNormal
          : testPageStyleTall
      }
    >
      <ContainerControlPanel />
      <TheList />
      <ItemControlPanel />
    </div>
  );
};

export default TestPage;
