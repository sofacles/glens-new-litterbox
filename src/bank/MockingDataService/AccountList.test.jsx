import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountList } from "./AccountList";
import Data from "../DataService/Data";

const mockgetAccountAt = jest.fn();
jest.mock("../DataService/Data", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAccountAt: mockgetAccountAt,
    };
  });
});
xtest("renders home page", () => {
  render(<AccountList />);
  screen.debug();
  const acctList = screen.getByTestId("account-list");
  expect(acctList).toHaveTextContent("453");
});
