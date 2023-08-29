import findMedianSortedArrays from "./MedianOfTwoSortedArrays";

describe("Median of two arrays", () => {
  let median: number;
  describe("two arrays of equal size, no dupes", () => {
    beforeEach(() => {
      median = findMedianSortedArrays([1, 3], [2, 4]);
    });

    it("should return 2.5", () => {
      expect(median).toEqual(2.5);
    });
  });

  describe("two arrays of equal size, with dupes", () => {
    beforeEach(() => {
      median = findMedianSortedArrays([1, 3], [1, 4]);
    });

    it("should return 2", () => {
      expect(median).toEqual(2);
    });
  });

  describe("two arrays of different size, with dupes", () => {
    beforeEach(() => {
      median = findMedianSortedArrays([1, 3, 7], [1, 4]);
    });

    it("should return 2", () => {
      expect(median).toEqual(3);
    });
  });
});
