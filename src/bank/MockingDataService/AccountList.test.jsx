import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountList } from "./AccountList";
import Data from "../DataService/Data";

// jest.mock("../DataService/Data", () => {
//   return {
//     class {
//   get accounts() {return [887]}
// }

const mockGetAccountAt = jest.fn((index) => 788);
jest.mock("../DataService/Data", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAccountAt: mockGetAccountAt,
    };
  });
});
test("renders home page", () => {
  render(<AccountList />);
  screen.debug();
  const acctList = screen.getByTestId("account-list");
  expect(acctList).toHaveTextContent("453");
});
