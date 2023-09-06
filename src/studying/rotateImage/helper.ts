import chalk from "chalk";

const { log } = console;

export const visualize = (matrix: number[][]) => {
  const topIndeces = new Array<string>(matrix[0].length)
    .fill(" ")
    .map((val, idx) => {
      return `  ${val}${idx} `;
    });
  log(chalk.blue(topIndeces.join("")));
  for (var i = 0; i < matrix.length; i++) {
    log(`${chalk.blue(i)}  ${matrix[i].join("  ")}`);
  }
};
