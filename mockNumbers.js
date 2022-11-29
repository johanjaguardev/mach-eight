const fs = require("fs");
const printNumbers = (limit, n) => {
  let text = "";
  for (let i = 0; i < n; i++) {
    const negative = Math.round(Math.random() * 4) % 2 === 0 ? 1 : -1;
    let randomN = Math.round(Math.random() * limit * negative);
    while (text.indexOf(randomN) !== -1) {
      randomN = Math.round(Math.random() * limit * negative);
    }
    text += `${randomN},`;
  }
  text = text.substring(0, text.length - 1);
  text += " " + Math.round((Math.random() * limit) / 10) + "\n";
  return text;
};

const mockNumbers = () => {
  let content = "";
  try {
    for (let i = 2; i <= 300; i++) {
      content += printNumbers(400, i);
    }
    content = content.substring(0, content.length - 1);
    fs.writeFileSync("data.txt", content);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
};

mockNumbers();
