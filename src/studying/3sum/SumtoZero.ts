const sortAndDedupe = (arr: number[]) => {
  const set = new Set(arr);

  const deduped = Array.from(set);

  return deduped.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  });
};

const sumValuesAtArrayIndeces = (
  numbers: number[],
  ...theIndeces: number[]
) => {
  let result = theIndeces.reduce((acc, current) => acc + numbers[current], 0);

  return result;
};

const sumToZero = (nums: number[]) => {
  const arr = sortAndDedupe(nums);
  const tripletsWhoAddUpToZero: number[][] = [];
  let p1 = 0;
  let p2 = 1;
  let p3 = 2;

  if (arr.length === 3) {
    if (sumValuesAtArrayIndeces(arr, 0, 1, 2) === 0) {
      tripletsWhoAddUpToZero.push([arr[0], arr[1], arr[2]]);
    }
  }
  while (p1 < arr.length - 3) {
    while (p2 < arr.length - 2) {
      while (
        p3 < arr.length - 1 &&
        sumValuesAtArrayIndeces(arr, p1, p2, p3) < 0
      ) {
        p3++;
      }
      if (sumValuesAtArrayIndeces(arr, p1, p2, p3) === 0) {
        tripletsWhoAddUpToZero.push([arr[p1], arr[p2], arr[p3]]);
      }
      // Since the array has been deduped, we know that if we keep incrementing p3, the sums are just going to get bigger.
      // so move p2 one to the right and put p3 just to the right of p2
      p2++;
      p3 = p2 + 1;
    }
    //p2 and p3 are already into numbers that add up to more than zero, so increment p1 and put p2 and p3 right after it.
    p1++;
    p2 = p1 + 1;
    p3 = p2 + 1;
  }
  return tripletsWhoAddUpToZero;
};

export { sortAndDedupe, sumToZero, sumValuesAtArrayIndeces };
