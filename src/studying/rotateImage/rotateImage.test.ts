import { rotateImage } from "./rotateImage";

describe("rotateImage", () => {
  let systemUnderTest = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let transformed: number[][] | undefined;

  describe(" 3x3", () => {
    beforeEach(() => {
      transformed = rotateImage(systemUnderTest);
    });
    it("needs an it", () => {
      expect(transformed).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ]);
    });
  });

  describe(" 2x2", () => {
    beforeEach(() => {
      transformed = rotateImage([
        [1, 2],
        [3, 4],
      ]);
    });
    it("needs an it", () => {
      expect(transformed).toEqual([
        [3, 1],
        [4, 2],
      ]);
    });
  });
});
