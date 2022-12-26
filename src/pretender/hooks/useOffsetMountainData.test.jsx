import React, { useContext } from "react";
import { getByTestId, fireEvent, render, screen } from "@testing-library/react";
import { SimpleConsumerOfOffsetMountainDataProvider } from "./test-helpers/SimpleConsumerOfOffsetMountainDataProvider";
import peaks from "../MountainData.js";

const renderTestContainer = () => {
  render(<SimpleConsumerOfOffsetMountainDataProvider />);
};

describe("renders with the correct initial state", () => {
  beforeEach(() => {
    renderTestContainer();
  });

  it("has zero initial offset", () => {
    const linkElement = screen.getByText(/offset: 0/i);
    expect(linkElement).toBeInTheDocument();
    screen.debug();
  });

  // jest has these screen dimensions by default: Height: 768,  Width: 1024
  // useScreenDimensions will set this to will 718 x 1024 when it subtracts the height of the instrument panel
  it("has not shuffled any of the peaks around", () => {
    const verticalOffset = 718;
    expect(screen.getByTestId("leftMostPixel")).toHaveTextContent(
      `LeftMostPixel is x: ${peaks[0].x}, y:${verticalOffset}`
    );
  });
});

describe("when UPDATE_GAME_OFFSET is dispatched with a positive number", () => {
  beforeEach(() => {
    renderTestContainer();
    //
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText("move mountains right"));
    }
  });

  it("has a positive gameOffset", () => {
    const linkElement = screen.getByText(/offset: 50/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("when UPDATE_GAME_OFFSET is dispatched with a negative number", () => {
  beforeEach(() => {
    renderTestContainer();
    //
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText("move mountains left"));
    }
  });

  it("has a negative gameOffset", () => {
    const linkElement = screen.getByText(/offset: -50/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("when UPDATE_GAME_OFFSET is dispatched with a positive number greater than PANEL_WIDTH", () => {
  beforeEach(() => {
    renderTestContainer();

    fireEvent.click(screen.getByText("move mountains 150 pixels left"));
  });

  it("has a positive gameOffset", () => {
    const linkElement = screen.getByText(/offset: 150/i);
    expect(linkElement).toBeInTheDocument();
  });
});
