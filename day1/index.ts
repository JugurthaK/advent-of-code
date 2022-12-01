import * as fs from "fs";

const result = [];
const content = fs.readFileSync("day1/input", "utf-8");
const elves = content.split(/\n\s*\n/);
for (const elf of elves) {
  const toSum = elf.split("\n");
  const res = toSum.reduce((prev, curr) => {
    if (isNaN(+curr)) return prev;
    return prev + +curr;
  }, 0);
  result.push(res);
}

const sorted = result.sort((a, b) => b - a).slice(0, 3);
console.log(sorted.reduce((prev, acc) => prev + acc));
