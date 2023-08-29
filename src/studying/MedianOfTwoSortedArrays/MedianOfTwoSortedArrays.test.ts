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

    it("should return 3", () => {
      expect(median).toEqual(3);
    });
  });

  describe("two arrays of different size, with one empty", () => {
    beforeEach(() => {
      median = findMedianSortedArrays([1, 3, 7], []);
    });

    it("should return 3", () => {
      expect(median).toEqual(3);
    });
  });

  describe("one array is has all the middle values", () => {
    beforeEach(() => {
      median = findMedianSortedArrays([6, 7, 9], [1, 2, 11]);
    });

    it("should return 6.5", () => {
      expect(median).toEqual(6.5);
    });
  });
});
