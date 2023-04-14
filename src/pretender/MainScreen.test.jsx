import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { THRUST_KEY } from "./Constants";
import MainScreen from "./MainScreen";

let mainScreen;
describe("MainScreen", () => {
  describe("thrusting", () => {
    describe("when you press the thrust key", () => {
      test("the mountains should scroll by", () => {
        const { keyboard } = userEvent.setup();
        mainScreen = render(<MainScreen />);
        debugger;
        keyboard("x");
      });
    });
  });
});
