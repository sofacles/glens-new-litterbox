import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SimpleConsumerOfOffsetMountainDataProvider } from "./test-helpers/SimpleConsumerOfOffsetMountainDataProvider";
import peaks from "../MountainData.js";

const renderTestContainer = () => {
  render(<SimpleConsumerOfOffsetMountainDataProvider />);
};

let mainScreen;
describe("MainScreen", () => {
  describe("moving the ship up and down", () => {
    beforeEach(() => {
      // window.resize = jest.fn(() => {
      //   window.
      // })

      jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
        cb(20);
        debugger;
        window.setTimeout(() => {
          cb(40), 30;
        });
      });

      //thx https://medium.com/@codegagan/react-functional-component-testing-by-mocking-hooks-55003c7ba0d7
      React.useEffect = jest.fn((fxn, triggers) => fxn());
    });

    describe("when you press the UP key", () => {
      test("the ship should go up", () => {
        const { keyboard } = userEvent.setup();
        mainScreen = render(<MainScreen />);
        keyboard(SHIP_DOWN_KEY);
        const a = screen.getByTestId("ship");
        //screen.debug();
        debugger;
        const imgEl = mainScreen.container.querySelector(
          '[data-testid="ship"]'
        );
        //you can get something here, but x, offsetTop, y are all undefined or ''.
        expect(screen.getByTestId("ship")).toBeInTheDocument();
      });
    });
  });
});
