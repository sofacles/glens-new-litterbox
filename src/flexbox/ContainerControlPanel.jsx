import React, { useContext } from "react";
import RadioGroup from "./RadioGroup.jsx";
import { FlexAndDataContext } from "./FlexAndDataContext";

const controlStyle = {
  flex: "1 1 auto",
};

export const ContainerControlPanel = ({
  alignItems,
  onAlignItemsChanged,
  flexDirection,
  onFlexDirectionChanged,
  flexWrap,
  onFlexWrapChanged,
}) => {
  const flexAndDataContext = useContext(FlexAndDataContext);

  //Can I only get dispatch?
  const [dataAndFlexItemStyles, dispatch] = flexAndDataContext;

  return (
    <>
      <h1>Parent flex styles</h1>
      <div style={{ display: "flex", alignItems: "stretch", width: "100%" }}>
        <section style={controlStyle}>
          <RadioGroup
            groupName="flexDirection"
            initialValue={flexDirection}
            possibleValues={["row", "column"]}
            onNewValue={onFlexDirectionChanged}
          />
        </section>

        <section style={controlStyle}>
          <RadioGroup
            groupName="alignItems"
            initialValue={alignItems}
            possibleValues={[
              "base-line",
              "center",
              "flex-start",
              "flex-end",
              "stretch",
            ]}
            onNewValue={onAlignItemsChanged}
          />
        </section>

        <section style={controlStyle}>
          <RadioGroup
            groupName="flexWrap"
            initialValue={flexWrap}
            possibleValues={["no-wrap", "wrap", "wrap-reverse"]}
            onNewValue={onFlexWrapChanged}
          />
        </section>
      </div>
    </>
  );
};
