import MaxArea from "./MaxArea";

describe("MaxArea", () => {
  let result: number;
  describe("a minimal array of heights", () => {
    beforeEach(() => {
      result = MaxArea([1, 1]);
    });
    it("should return the one possible area", () => {
      expect(result).toEqual(1);
    });
  });

  describe("the left most height is not one of the two highest", () => {
    beforeEach(() => {
      result = MaxArea([3, 6, 1, 9, 8]);
    });
    it("should return 18", () => {
      expect(result).toEqual(18);
    });
  });

  describe("tallest heights are on the sides", () => {
    beforeEach(() => {
      result = MaxArea([9, 4, 1, 1, 4, 8]);
    });
    it("should return 40", () => {
      expect(result).toEqual(40);
    });
  });

  describe("tallest heights are in the middle", () => {
    beforeEach(() => {
      result = MaxArea([2, 4, 100, 100, 4, 2]);
    });
    it("should return 100", () => {
      expect(result).toEqual(100);
    });
  });

  describe("tallest heights are in the middle, separated by 1", () => {
    beforeEach(() => {
      result = MaxArea([2, 4, 100, 1, 100, 4, 2]);
    });
    it("should return 200", () => {
      expect(result).toEqual(200);
    });
  });
});
