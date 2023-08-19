/* 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the 
ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

const MaxArea = (height: number[]) => {
  //start at the outside and call that your biggest box.  Any box you find inside of that range must be taller than that if the box is going to be bigger
  const maxIndex = height.length - 1;
  let leftPtr = 0;
  let rightPtr = maxIndex;

  //this needs to reset every time we increment the left ptr
  let heightOfWidestBox4ThisLeftPtr: number;
  let maxArea = 0;
  while (leftPtr < rightPtr) {
    heightOfWidestBox4ThisLeftPtr = Math.min(height[leftPtr], height[rightPtr]);
    if (heightOfWidestBox4ThisLeftPtr * (rightPtr - leftPtr) > maxArea) {
      maxArea = heightOfWidestBox4ThisLeftPtr * (rightPtr - leftPtr);
    }

    while (rightPtr > leftPtr) {
      rightPtr--;
      if (height[rightPtr] > heightOfWidestBox4ThisLeftPtr) {
        //The height of this box is taller than the height of our current biggest box for this leftPtr

        //So, see if we've found a bigger box
        const heightOfNewBox = Math.min(height[leftPtr], height[rightPtr]);
        if ((rightPtr - leftPtr) * heightOfNewBox > maxArea) {
          maxArea = (rightPtr - leftPtr) * heightOfNewBox;
        }
      }
    }
    leftPtr++;
    rightPtr = maxIndex;
  }

  return maxArea;
};

export default MaxArea;
