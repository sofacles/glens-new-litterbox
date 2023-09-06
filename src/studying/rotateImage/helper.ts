import chalk from "chalk";

console.log(chalk.blue("Hello world!"));
const { log } = console;

export const visualize = (matrix: number[][]) => {
  const topIndeces = new Array<string>(matrix[0].length)
    .fill(" ")
    .map((val, idx) => {
      return `${val}${idx} `;
    });
  log(chalk.blue(topIndeces.join("")));
  debugger;
  for (var i = 0; i < matrix.length; i++) {
    log(`${chalk.blue(i)}  ${matrix[i].join(" ")}`);
  }

  //   console.log(
  //     chalk.blue(new Array<string>(matrix[0].length).fill("-").join(""))
  //   );
};
