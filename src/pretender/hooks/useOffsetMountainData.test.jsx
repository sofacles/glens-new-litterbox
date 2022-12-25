import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { SimpleConsumerOfOffsetMountainDataProvider } from "./test-helpers/SimpleConsumerOfOffsetMountainDataProvider";

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
