import { ZigZag, printGrid, printOutput } from "./ZigZag";

let zigZagUnderTest;

describe("ZigZag", () => {
  xdescribe("One letter, one row", () => {
    beforeEach(() => {
      zigZagUnderTest = ZigZag("a", 1);
    });
    it("should display the lone a", () => {
      expect(printOutput()).toEqual("a");
    });
  });

  describe("One letter, two rows", () => {
    beforeEach(() => {
      zigZagUnderTest = ZigZag("a", 2);
    });
    it("should display the lone a", () => {
      expect(printOutput()).toEqual("a");
    });
  });

  describe("Two letters, one row", () => {
    beforeEach(() => {
      zigZagUnderTest = ZigZag("ab", 1);
    });
    it("should display ab", () => {
      expect(printOutput()).toEqual("ab");
    });
  });

  describe("Three letters, two rows", () => {
    beforeEach(() => {
      zigZagUnderTest = ZigZag("abc", 2);
    });
    it("should display acb", () => {
      expect(printOutput()).toEqual("acb");
    });
  });

  describe("PAYPALISHIRING, three rows", () => {
    beforeEach(() => {
      zigZagUnderTest = ZigZag("PAYPALISHIRING", 3);
    });
    it("should display acb", () => {
      expect(printOutput()).toEqual("PAHNAPLSIIGYIR");
    });
  });

  describe("PAYPAL, three rows", () => {
    beforeEach(() => {
      zigZagUnderTest = ZigZag("PAYPAL", 3);
    });
    it("should display acb", () => {
      console.info(JSON.stringify(printGrid()));
      expect(printOutput()).toEqual("PAAPLY");
    });
  });
});
