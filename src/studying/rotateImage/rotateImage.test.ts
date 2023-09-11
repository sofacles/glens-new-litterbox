import { rotateImage } from "./rotateImage";
import { visualize } from "./helper";

describe("rotateImage", () => {
  let transformed: number[][] | undefined;

  describe("1x1", () => {
    beforeEach(() => {
      transformed = rotateImage([[1]]);
    });
    it("needs an it", () => {
      expect(transformed).toEqual([[1]]);
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

  describe(" 3x3", () => {
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
  4;

  describe("10 x 10", () => {
    beforeEach(() => {
      let systemUnderTest = [
        [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        [200, 210, 220, 230, 240, 250, 260, 270, 280, 290],
        [300, 310, 320, 330, 340, 350, 360, 370, 380, 390],
        [400, 410, 420, 430, 440, 450, 460, 470, 480, 490],
        [500, 510, 520, 530, 540, 550, 560, 570, 580, 590],
        [600, 610, 620, 630, 640, 650, 660, 670, 680, 690],
        [700, 710, 720, 730, 740, 750, 760, 770, 780, 790],
        [800, 810, 820, 830, 840, 850, 860, 870, 880, 890],
        [900, 910, 920, 930, 940, 950, 960, 970, 980, 990],
      ];
      transformed = rotateImage(systemUnderTest);
    });
    it("needs an it", () => {
      expect(transformed).toEqual([
        [900, 800, 700, 600, 500, 400, 300, 200, 100, 0],
        [910, 810, 710, 610, 510, 410, 310, 210, 110, 10],
        [920, 820, 720, 620, 520, 420, 320, 220, 120, 20],
        [930, 830, 730, 630, 530, 430, 330, 230, 130, 30],
        [940, 840, 740, 640, 540, 440, 340, 240, 140, 40],
        [950, 850, 750, 650, 550, 450, 350, 250, 150, 50],
        [960, 860, 760, 660, 560, 460, 360, 260, 160, 60],
        [970, 870, 770, 670, 570, 470, 370, 270, 170, 70],
        [980, 880, 780, 680, 580, 480, 380, 280, 180, 80],
        [990, 890, 790, 690, 590, 490, 390, 290, 190, 90],
      ]);
    });
  });
});
