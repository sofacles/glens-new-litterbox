import { visualize } from "./helper";

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  equals(p: Point) {
    return p.x === this.x && p.y == this.y;
  }
}

type directionType = "up" | "down" | "left" | "right" | undefined;

//x increases as you go to the right
//y increases as you go down

export const rotateImage = (matrix: number[][]) => {
  const width = matrix.length; //assuming we will always get a square shaped matrix.  I could have also called this "height".
  let retVal: directionType = undefined;

  const getDirectionOfTravel = (p: Point, depth: number) => {
    const { x, y } = p;

    if (y <= width / 2 && x < width - depth - 1) {
      retVal = "right";
    } else if (x === width - 1 - depth && y < width - 1 - depth) {
      retVal = "down";
    } else if (y === width - 1 - depth && x > depth) {
      retVal = "left";
    } else if (x === depth && y > depth) {
      retVal = "up";
    }

    if (retVal === undefined) {
      throw new Error(
        `Can't determine a valid direction for point: ${JSON.stringify(
          p
        )} and depth: ${depth}`
      );
    }

    return retVal;
  };

  const getTargetCoordinates = (depth: number, src: Point): Point => {
    let dir = getDirectionOfTravel(src, depth);
    const distance = width; //the total number of squares we want to move
    let retVal: Point;
    //these will be ADDED to the x or y of the point, so they should be either negative or positive
    let changeInX = 0;
    let changeInY = 0;
    switch (dir) {
      case "right":
        //part of the movement will be right, and part will be down
        changeInX = distance - 1 - depth;
        changeInY = distance - 1 - changeInX;
        break;
      case "down":
        //part of the movement will be down, and part will be left
        changeInY = distance - 1 - depth;
        changeInX = -(distance - 1 - Math.abs(changeInY));
        break;
      case "left":
        //part of the movement will be left, and part will be up
        changeInX = -(distance - 1 - depth);
        changeInY = -(distance - 1 - Math.abs(changeInX) - depth);
        break;
      case "up":
        //part of the movement will be up, and part will be right
        changeInY = -(distance - 1 - depth);
        changeInX = distance - 1 - Math.abs(changeInY);
        break;
    }
    return new Point(src.x + changeInX, src.y + changeInY);
  };

  let depth = 0;
  while (depth < width / 2) {
    let src = new Point(depth, depth);
    while (src.x < width - depth) {
      const startingPoint = new Point(src.x, src.y);
      //need to move src once so I can keep checking to make sure it hasn't gone  full circle
      debugger;
      let target = getTargetCoordinates(depth, src);
      //keep a copy of what was in the target
      let tempValue = matrix[target.y][target.x];
      //write the src value to target, which is 90 clockwise
      matrix[target.y][target.x] = matrix[src.y][src.x];
      src.x = target.x;
      src.y = target.y;
      while (!src.equals(startingPoint)) {
        matrix[target.y][target.x] = tempValue;
        target = getTargetCoordinates(depth, src);

        tempValue = matrix[target.y][target.x];
        matrix[target.y][target.x] = matrix[src.y][src.x];
        src.x = target.x;
        src.y = target.y;
      }
      //now we need to move the src cell one to the right
      visualize(matrix);
      return;
    }
  }
};
