import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

//Dig it.  You can mock a child component.
jest.mock("./Login", () => {
  return {
    Login: (props) => {
      //You can even have access to the props
      return <span data-testid="login">mocked {props.userName}</span>;
    },
  };
});

test("renders home page", () => {
  render(<HomePage />);
  const loginLabel = screen.getByTestId("login");
  expect(loginLabel).toHaveTextContent("mocked Art");
});
