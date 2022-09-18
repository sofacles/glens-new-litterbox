import React, { useContext } from "react";
import RadioGroup from "./RadioGroup.jsx";
import { ContainerContext } from "./ContainerContext";
import { TestPageLayoutContext } from "./TestPageLayoutContext.jsx";

const controlStyle = {
  flex: "1 1 auto",
};

export const ContainerControlPanel = () => {
  const containerContext = useContext(ContainerContext);

  //Can I only get dispatch?
  const [ContainerStyles, dispatch] = containerContext;
  const { currentListOrientation, dispatch2 } = useContext(
    TestPageLayoutContext
  );

  const localStyle = {
    display: "flex",
    flexDirection:
      currentListOrientation.listOrientation == "row" ? "row" : "column",
    marginBottom: "10px",
    width: currentListOrientation.listOrientation == "row" ? "100%" : "100%",
  };

  return (
    <div
      style={{
        padding: "10px",
        width:
          currentListOrientation.listOrientation === "row" ? "100%" : "33%",
      }}
    >
      <h1>Parent flex styles</h1>
      <div style={localStyle}>
        <section style={controlStyle}>
          <RadioGroup
            groupName="flexDirection"
            initialValue={ContainerStyles.flexDirection}
            possibleValues={["row", "column"]}
            onNewValue={(newVal) => {
              dispatch2({ type: "UPDATE_FLEX_DIR", cargo: newVal });
              dispatch({
                type: "UPDATE_FLEX_DIRECTION",
                cargo: newVal,
              });
            }}
          />
        </section>

        <section style={controlStyle}>
          <RadioGroup
            groupName="alignItems"
            initialValue={ContainerStyles.alignItems}
            possibleValues={[
              "base-line",
              "center",
              "flex-start",
              "flex-end",
              "stretch",
            ]}
            onNewValue={(newVal) => {
              dispatch({
                type: "UPDATE_ALIGN_ITEMS",
                cargo: newVal,
              });
            }}
          />
        </section>

        <section style={controlStyle}>
          <RadioGroup
            groupName="flexWrap"
            initialValue={ContainerStyles.flexWrap}
            possibleValues={["nowrap", "wrap", "wrap-reverse"]}
            onNewValue={(newVal) => {
              dispatch({
                type: "UPDATE_FLEX_WRAP",
                cargo: newVal,
              });
            }}
          />
        </section>
      </div>
    </div>
  );
};
