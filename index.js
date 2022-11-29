const fs = require("fs");
const logExtended = require("./logExtended");

const checkPairs = (items, sum) => {
  let i = 0;
  let j = items.length - 1;
  let pairs = "";

  while (i < j) {
    while (items[i] + items[j] > sum) {
      j--;
    }
    if (items[i] + items[j] === sum && i < j) {
      pairs += `+ ${items[i]}, ${items[j]}\n`;
    }
    i++;
  }

  console.log(`Items: ${items}, sum: ${sum}\n${pairs}\n`);
  return pairs;
};

const divideInput = (userInput) => {
  return {
    items: userInput
      .split(" ")[0]
      .split(",")
      .map((e) => parseInt(e))
      .sort(function (a, b) {
        return parseInt(a) - parseInt(b);
      }),
    sum: parseInt(userInput.split(" ")[1]),
  };
};

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data.split("\n").forEach((row) => {
    const start = performance.now();
    const r = divideInput(row);
    const pairs = checkPairs(r.items, r.sum);
    const end = performance.now();
    logExtended({
      pairs: pairs,
      items: r.items,
      start: start,
      end: end,
      n: r.items.length,
      sum: r.sum,
    });
  });

  console.log("\nBYE BYE !!!");
  process.exit(0);
});
