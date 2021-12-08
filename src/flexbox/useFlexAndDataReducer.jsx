import React, { useReducer } from "react";

const initialState = { defaultItemFlex: { flex: "1 1 auto" } };
//Pass in all the data and an initial, full set of data and export a subset of the data
//decorated with the default item style
const useFlexAndDataReducer = (
  data,
  count = 4,
  defaultItemStyle = initialState
) => {
  function reducer(state, action) {
    switch (action.type) {
      case "update_count":
        //maybe save all the existing styles when count is updated?
        const existingFlexStyles = state.map((el) => el.flex);
        const newData = data
          .slice(0, action.cargo.newCount)
          .map((datum, index) => {
            return {
              physicalData: datum,
              flex: existingFlexStyles[index] ?? {
                defaultItemFlex: defaultItemStyle.defaultItemFlex,
              },
            };
          });
        return newData;
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  //decorate the data with an initial item style
  const dataAndStyles = data.slice(0, count).map((datum, index) => {
    return {
      physicalData: datum,
      flex: defaultItemStyle,
    };
  });
  const [dataAndFlexItemStyles, dispatch] = useReducer(reducer, dataAndStyles);
  return [dataAndFlexItemStyles, dispatch];
};

export { useFlexAndDataReducer };
