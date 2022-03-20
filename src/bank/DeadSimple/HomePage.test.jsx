import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

/*
You can mock a child component;
The Login component that HomePage renders has a userName hard-coded to Barb, 
but you can mock it like this:
*/
jest.mock("./Login", () => {
  return {
    Login: () => {
      return <span data-testid="login">Glen</span>;
    },
  };
});

test("renders home page", () => {
  render(<HomePage />);
  const loginLabel = screen.getByTestId("login");
  expect(loginLabel).toHaveTextContent("Glen");
});
