import * as fs from "fs";

const verify = (arr: string[], index) => {
  console.log("testing", arr);
  if (new Set(arr).size === arr.length)
    console.log(arr.join(","), "is unique", index);
  return new Set(arr).size === arr.length;
};

const main = () => {
  const toVerify = [];

  const packet = fs.readFileSync("day6/input");
  packet.forEach((code, index) => {
    const char = String.fromCharCode(code);
    if (toVerify.length < 14) {
      return toVerify.push(char);
    }
    if (verify(toVerify, index)) return process.exit(0);
    toVerify.shift();
    toVerify.push(char);
  });
};

main();
