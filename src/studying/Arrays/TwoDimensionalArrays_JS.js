// const grid: [string[], string[]] = [[], []];
//this puts a reference to an array in each of the two top level arrays
let grid = new Array(2).fill([1, 2]);
// const grid = [
//   [1, 2],
//   [1, 2],
// ];

grid[0][0] = 9;
//this updates the one an only array reference so grid will have [[9,2], [9,2]]

//but this works, because a new array gets created for each member of the top-level array
grid = new Array(2).fill().map((x) => [1, 2]);
grid[0][0] = 9;

export { grid, getGrid };
