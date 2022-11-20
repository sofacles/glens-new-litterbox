import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import {
  OffsetMountainDataContext,
  OffsetMountainDataProvider,
} from "./useOffsetMountainData";

const ComponentThatUsesHook = () => {
  //vs code shows errors about state and dispatch not existing on the type returned by useContext, but it works.
  const { state, dispatch } = useContext(OffsetMountainDataContext);

  console.info(state);
  render(
    <div>
      {" "}
      test component <span>offset: {state.gameOffset}</span>
    </div>
  );
};

const renderTestContainer = () => {
  render(
    <OffsetMountainDataProvider>
      <ComponentThatUsesHook />
    </OffsetMountainDataProvider>
  );
};

test("renders with the correct initial state", () => {
  renderTestContainer();
  //screen.debug();
  const linkElement = screen.getByText(/offset: 0/i);
  expect(linkElement).toBeInTheDocument();
});
