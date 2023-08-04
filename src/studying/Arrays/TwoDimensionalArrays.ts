// const grid: [string[], string[]] = [[], []];
const grid = new Array<string[] | null>(3).fill(null).map(() => [""]);

grid[0][0] = "a";
// grid[0][1] = "b";
// grid[1][0] = "c";
// grid[1][1] = "d";

const getGrid = () => console.log(JSON.stringify(grid));

export { grid, getGrid };
