import * as fs from "fs";
import readline from "readline";

type Borne = { left: number; right: number };

const generateBornes = (line: string): Borne[] => {
  return line.split(",").map((elf) => {
    const [left, right] = elf.split("-");
    return { left: +left, right: +right } as Borne;
  });
};

const overlap = (borneA: Borne, borneB: Borne): boolean => {
  if (borneA.left <= borneB.right && borneA.right >= borneB.left) return true;
  else if (borneB.left <= borneA.right && borneB.right >= borneA.left)
    return true;
};
const main = async () => {
  const rl = readline.createInterface({
    input: fs.createReadStream("day4/input"),
    crlfDelay: Infinity,
  });

  //const rl = ["5-7,7-9", "2-8,3-7", "6-6,4-6", "2-6,4-8"];
  const result = [];
  for await (const line of rl) {
    const [borneA, borneB] = generateBornes(line);
    if (overlap(borneA, borneB)) result.push([borneA, borneB]);
  }
  console.log(result.length);
};

main();
