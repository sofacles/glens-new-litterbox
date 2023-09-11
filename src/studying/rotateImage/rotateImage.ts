// Sep 7 I am having trouble figuring out a general expression for how many squares I need to move left in getTargetCoordinates.
// See ~/temp for the latest version, where you can debug it in ts-node.

// Sep 11, OK done.

export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

let width: number;

const enum DIRECTIONS {
  "right",
  "down",
  "left",
  "up",
}

//x increases as you go to the right
//y increases as you go down

const getTargetCoordinates = (
  src: Point,
  firstLeg: number,
  secondLeg: number,
  direction: DIRECTIONS
) => {
  switch (direction) {
    case DIRECTIONS.right:
      return new Point(src.x + firstLeg, src.y + secondLeg);
    case DIRECTIONS.down:
      return new Point(src.x - secondLeg, src.y + firstLeg);
    case DIRECTIONS.left:
      return new Point(src.x - firstLeg, src.y - secondLeg);
    case DIRECTIONS.up:
      return new Point(src.x + secondLeg, src.y - firstLeg);
    default:
      throw new Error(`what kind  of direction is ${direction}`);
  }
};

export const rotateImage = (m: number[][]) => {
  width = m.length; //assuming we will always get a square shaped matrix.  I could have also called this "height".
  // Work your way from the outside in
  let depth = 0;
  while (depth < width / 2) {
    let topRowIdx = depth;
    let firstLeg = width - 1 - depth * 2;
    let secondLeg = 0;
    //while we are still in the top row for this depth
    while (topRowIdx < width - depth - 1) {
      let src = new Point(topRowIdx, depth);
      let targetPoint = getTargetCoordinates(src, firstLeg, secondLeg, 0);

      let valueToPutInTarget = m[src.y][src.x];
      let origTargetValue = m[targetPoint.y][targetPoint.x];

      // Push the value one "local width" around the square at whatever depth you're at, then push the value that used to be at that destination another
      // "local width" tiles clockwise... 4 times because there are four sides to a square
      // a "local width" is width - 1 - depth * 2;
      for (let i = 1; i < 4; i++) {
        m[targetPoint.y][targetPoint.x] = valueToPutInTarget;
        valueToPutInTarget = origTargetValue;
        src.x = targetPoint.x;
        src.y = targetPoint.y;
        targetPoint = getTargetCoordinates(targetPoint, firstLeg, secondLeg, i);
        origTargetValue = m[targetPoint.y][targetPoint.x];
      }
      m[targetPoint.y][targetPoint.x] = valueToPutInTarget;
      //now we need to move the src cell one to the right

      topRowIdx++;
      firstLeg--;
      secondLeg++;
    }
    depth++;
  }
  return m;
};
