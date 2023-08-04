//make 2 arrays with five items each
var [r, c] = [2, 5];
var m = Array(2)
  .fill()
  .map(() => Array(5).fill(0));

console.log(JSON.stringify(m));

m[0][1] = 1;

console.log(JSON.stringify(m));
