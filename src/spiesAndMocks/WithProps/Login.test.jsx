import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "./Login";

test("renders learn react link", () => {
  render(<Login userName="Brenda" isLoggedIn={true} />);
  expect(screen.getByText("Brenda")).toBeInTheDocument();
});
