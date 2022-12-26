import React, { useContext } from "react";
import { getByTestId, fireEvent, render, screen } from "@testing-library/react";
import { SimpleConsumerOfOffsetMountainDataProvider } from "./test-helpers/SimpleConsumerOfOffsetMountainDataProvider";

console.log("The top of the test file");
const renderTestContainer = () => {
  render(<SimpleConsumerOfOffsetMountainDataProvider />);
};

describe("renders with the correct initial state", () => {
  beforeEach(() => {
    renderTestContainer();
    screen.debug();
  });

  it("has zero initial offset", () => {
    const linkElement = screen.getByText(/offset: 0/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("when UPDATE_GAME_OFFSET is dispatched with a negative number", () => {
  beforeEach(() => {
    renderTestContainer();
    //fireEvent.click(screen.getByText("go right"));
    fireEvent.click(screen.getByTestId("moveRightBtn"));
  });

  it("has a negative offset", () => {
    const linkElement = screen.getByText(/offset: -10/i);
    expect(linkElement).toBeInTheDocument();
  });
});
