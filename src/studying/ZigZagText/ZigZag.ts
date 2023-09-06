let grid: string[];

//used to remember how many rows and cols we need to consider when we want to render the in-grid representation of the zigzag
let rowCount = 0;
let maxObservedColIndex = 0;

const ZigZag = (letters: string, nRows: number) => {
  rowCount = nRows;
  debugger;
  grid = new Array<string>(nRows).fill("");
  //which row you're in
  let rowIndex = 0;
  //where we are in the input string
  let stringIndex = 0;

  const finished = () => stringIndex >= letters.length;
  try {
    while (!finished()) {
      //print the letters down the first column
      while (rowIndex < nRows && !finished()) {
        grid[rowIndex++] += letters[stringIndex++];
      }
      //we are right at nRows here, but I want to point to the grid row that second to last
      rowIndex -= 2;
      //special case for when you only have one row
      rowIndex = rowIndex > 0 ? rowIndex : 0;
      //then move up on a slope of 1 until you get ALMOST to the top again

      while (rowIndex >= 1 && !finished()) {
        grid[rowIndex--] += letters[stringIndex++];
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const printGrid = () => {
  const arrRowStrings = [];
  for (let row = 0; row < rowCount; row++) {
    arrRowStrings.push(grid[row]);
  }
  return arrRowStrings;
};

const printOutput = () => {
  let output = "";
  for (let row = 0; row < rowCount; row++) {
    if (grid[row].length > 0) {
      output += grid[row];
    }
  }
  return output;
};

export { ZigZag, printGrid, printOutput };
