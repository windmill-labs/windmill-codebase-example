import { test } from "../../../src/index.ts";
import * as cowsay from "cowsay";

export async function main(x: string, y: number) {
  console.log(cowsay.say({ text: "XXXXXX" }));
  test(x);
  console.log("BAR");
}
