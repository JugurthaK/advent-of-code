import * as fs from "fs";
import readline from "readline";

const computeValue = (char: string): number => {
  const asciiValue = char.charCodeAt(0);
  if (asciiValue >= 65 && asciiValue <= 90) return asciiValue - 65 + 27;
  if (asciiValue >= 97 && asciiValue <= 122) return asciiValue - 96;
  return 0;
};

const main = async () => {
  const input = fs.createReadStream("day3/input");
  const rl = readline.createInterface({ input, crlfDelay: Infinity });

  let iterator = 0;
  let groupOf3elves = [];

  let sum = 0;
  for await (const line of rl) {
    if (iterator < 3) {
      groupOf3elves.push(line);
      iterator++;
    }
    if (iterator === 3) {
      const [[...firstElf], [...secondElf], [...thirdElf]] = groupOf3elves;
      const commonBetweenElves = firstElf.filter(
        (object: string) =>
          secondElf.includes(object) && thirdElf.includes(object)
      );
      sum += computeValue(commonBetweenElves[0]);
      // Reset for next group
      iterator = 0;
      groupOf3elves = [];
    }
  }

  console.log(sum);
};

main();
// score 2499
