import * as fs from "fs";
import readline from "readline";

type round = { opponent: string; me: string };

const pointsPerRound = (round: round): number => {
  switch (round.opponent) {
    case "A":
      if (round.me === "X") return 3;
      if (round.me === "Y") return 4;
      if (round.me === "Z") return 8;
      break;
    case "B":
      if (round.me === "X") return 1;
      if (round.me === "Y") return 5;
      if (round.me === "Z") return 9;
      break;
    case "C":
      if (round.me === "X") return 2;
      if (round.me === "Y") return 6;
      if (round.me === "Z") return 7;
      break;
    default:
      return 0;
  }
};

const main = async () => {
  const input = fs.createReadStream("day2/input");
  const rl = readline.createInterface({ input, crlfDelay: Infinity });

  let sum = 0;
  for await (const line of rl) {
    const [opponent, me] = line.split(" ");
    const round: round = { opponent, me };
    sum += pointsPerRound(round);
  }

  console.log(sum);
};

main();
