import { sortAndDedupe, sumToZero } from "./SumtoZero";

describe("sort and dedupe", () => {
  it("can dedupe two duplicate numbers at the beginning of the array", () => {
    const result = sortAndDedupe([1, 1, 2]);
    expect(result).toStrictEqual([1, 2]);
  });

  it("can sort with two duplicate numbers in the array", () => {
    const result = sortAndDedupe([9, 5, 5, 2]);
    expect(result).toStrictEqual([2, 5, 9]);
  });

  it("can sort with four duplicate numbers spread around the array", () => {
    const result = sortAndDedupe([5, 9, 5, 65, 5, 2, 5]);
    expect(result).toStrictEqual([2, 5, 9, 65]);
  });
});

describe("sumToZero", () => {
  it("can find multiple sumZeros", () => {
    const result = sumToZero([-2, -1, 0, 1, 2]);
    expect(result).toStrictEqual([
      [-2, 0, 2],
      [-1, 0, 1],
    ]);
  });

  it("can pick triplets out of an unsorted array with duplicates", () => {
    const result = sumToZero([0, 4, -3, -2, 2, 3, -1, 0, 1, 2, -99]);
    expect(result).toStrictEqual([
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, 0, 1],
    ]);
  });
});
