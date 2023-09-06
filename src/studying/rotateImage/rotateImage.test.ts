import { rotateImage } from "./rotateImage";

describe("rotateImage", () => {
  let transformed: number[][] | undefined;

  xdescribe(" 3x3", () => {
    beforeEach(() => {
      let systemUnderTest = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
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

  describe(" 4 x 4", () => {
    beforeEach(() => {
      let systemUnderTest = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];
      transformed = rotateImage(systemUnderTest);
    });
    it("needs an it", () => {
      expect(transformed).toEqual([
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4],
      ]);
    });
  });
});
