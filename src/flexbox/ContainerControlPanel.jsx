import React, { useContext } from "react";
import RadioGroup from "./RadioGroup.jsx";
import { ContainerContext } from "./ContainerContext";

const controlStyle = {
  flex: "1 1 auto",
};

export const ContainerControlPanel = ({
  alignItems,
  flexDirection,
  flexWrap,
  onFlexWrapChanged,
}) => {
  const containerContext = useContext(ContainerContext);

  //Can I only get dispatch?
  const [ContainerStyles, dispatch] = containerContext;

  return (
    <>
      <h1>Parent flex styles</h1>
      <div style={ContainerStyles}>
        <section style={controlStyle}>
          <RadioGroup
            groupName="flexDirection"
            initialValue={ContainerStyles.flexDirection}
            possibleValues={["row", "column"]}
            onNewValue={(newVal) => {
              debugger;
              dispatch({
                type: "UPDATE_FLEX_DIRECTION",
                cargo: newVal
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
              debugger;
              dispatch({
                type: "UPDATE_ALIGN_ITEMS",
                cargo: newVal
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
              debugger;
              dispatch({
                type: "UPDATE_FLEX_WRAP",
                cargo: newVal,
              });
            }}
          />
        </section>
      </div>
    </>
  );
};
