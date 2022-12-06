import * as fs from "fs";
import readline from "readline";

type Move = { nbElement: number; from: number; to: number };

const init = [
  "D,T,R,B,J,L,W,G",
  "S,W,C",
  "R,Z,T,M",
  "D,T,C,H,S,P,V",
  "G,P,T,L,D,Z",
  "F,B,R,Z,J,Q,C,D",
  "S,B,D,J,M,F,T,R",
  "L,H,R,B,T,V,M",
  "Q,P,D,S,V",
].map((elem) => elem.split(","));

//const init = ["Z, N", "M,C,D", "P"].map((elem) => elem.split(","));

const moveFromArray = (move: Move) => {
  const source = init[move.from - 1];
  const destination = init[move.to - 1];
  const sliced = source.splice(source.length - move.nbElement);
  destination.push(...sliced);
};

const main = async () => {
  const rl = readline.createInterface({
    input: fs.createReadStream("day5/input"),
    crlfDelay: Infinity,
  });

  /*   const rl = [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
  ]; */
  for await (const line of rl) {
    const [nbElement, from, to] = line
      .replace("move ", "")
      .replace("from ", "")
      .replace("to ", "")
      .split(" ")
      .map((elem) => +elem);
    const move: Move = { nbElement, from, to };
    moveFromArray(move);
  }
  const res = [];
  init.map((elem) => res.push(elem[elem.length - 1]));
  console.log(res.join(""));
};

main();
