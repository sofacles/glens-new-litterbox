import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountList } from "./MockingClassMethod";
import Data from "../DataService/Data";

describe("AccountList", () => {
  beforeEach(() => {
    jest.spyOn(Data.prototype, "getAccountAt").mockReturnValue("fern");
    render(<AccountList />);
  });

  test("renders accountList page", () => {
    const acctList = screen.getByTestId("account-list");
    expect(acctList).toHaveTextContent("fern");
  });
});
