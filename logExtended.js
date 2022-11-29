const fs = require("fs");

const logExtended = (print) => {
  if (print.n == 2) {
    fs.writeFileSync("extended-results.txt", "");
  }
  let newText = `items: ${print.items}\nPaired Items:\n${
    print.pairs
  }\nTime spend: ${print.end - print.start}.// n=${print.n}.// sum: ${
    print.sum
  }\n*********************************************\n`;
  fs.appendFileSync("extended-results.txt", newText);
};
module.exports = logExtended;
