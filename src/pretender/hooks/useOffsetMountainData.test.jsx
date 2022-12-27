import React, { useContext } from "react";
import { getByTestId, fireEvent, render, screen } from "@testing-library/react";
import { SimpleConsumerOfOffsetMountainDataProvider } from "./test-helpers/SimpleConsumerOfOffsetMountainDataProvider";
import peaks from "../MountainData.js";

const renderTestContainer = () => {
  render(<SimpleConsumerOfOffsetMountainDataProvider />);
};

// jest has these screen dimensions by default: Height: 768,  Width: 1024
// useScreenDimensions will set this to will 718 x 1024 when it subtracts the height of the instrument panel
const verticalOffset = 718;

describe("renders with the correct initial state", () => {
  beforeEach(() => {
    renderTestContainer();
  });

  it("has zero initial offset", () => {
    const linkElement = screen.getByText(/offset: 0/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("has not shuffled any of the peaks around", () => {
    expect(screen.getByTestId("leftMostPixelX")).toHaveTextContent(peaks[0].x);
    expect(screen.getByTestId("leftMostPixelY")).toHaveTextContent(
      peaks[peaks.length - 1].y + verticalOffset
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

//flying to the right, mountains are scrolling to the left.
describe("when UPDATE_GAME_OFFSET is dispatched with a number greater than PANEL_WIDTH", () => {
  beforeEach(() => {
    renderTestContainer();

    fireEvent.click(screen.getByText("move mountains 110 pixels left"));
  });

  it("has a gameOffset equal to the amount you passed to the reducer", () => {
    const linkElement = screen.getByText(/offset: 110/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("has moved the left most mountain peak to the right end of the array", () => {
    //the peak that was all the way on the right had x:2000.  It will have been moved to the left 110 pixels, so 2000 - 110 = 1890.  Then when we talk the peak onto the right side of the world, we look at 1790 and add
    // 100 to it -> 1990
    expect(screen.getByTestId("rightMostPixelX")).toHaveTextContent(1990);
    expect(screen.getByTestId("rightMostPixelY")).toHaveTextContent(
      verticalOffset
    );
  });
});
