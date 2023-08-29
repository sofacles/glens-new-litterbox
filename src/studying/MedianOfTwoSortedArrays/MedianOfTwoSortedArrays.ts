export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  let combined: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  const leftIndexPastEnd = () => leftIndex === nums1.length;
  const rightIndexPastEnd = () => rightIndex === nums2.length;

  while (!leftIndexPastEnd() || !rightIndexPastEnd()) {
    //only push one number onto the combined array per loop iteration
    if (
      //if the left ptr is less than the right pointer
      !leftIndexPastEnd() &&
      (rightIndexPastEnd() || nums1[leftIndex] < nums2[rightIndex])
    ) {
      combined.push(nums1[leftIndex++]);
    } else if (
      //if the right ptr is less than the left one
      !rightIndexPastEnd() &&
      (leftIndexPastEnd() || nums2[rightIndex] < nums1[leftIndex])
    ) {
      combined.push(nums2[rightIndex++]);
    } else if (nums1[leftIndex] === nums2[rightIndex]) {
      //neither pointer has gone past the end and the two values are equal
      combined.push(nums1[leftIndex++]);
    }
  }

  const medianOrFirstMemberOfSecondHalf =
    combined.length % 2 === 1
      ? Math.floor(combined.length / 2)
      : combined.length / 2;

  if (combined.length === 1) {
    return combined[0];
  } else if (combined.length % 2 === 0) {
    return (
      (combined[medianOrFirstMemberOfSecondHalf - 1] +
        combined[medianOrFirstMemberOfSecondHalf]) /
      2
    );
  } else {
    return combined[medianOrFirstMemberOfSecondHalf];
  }
}
