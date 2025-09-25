import { test } from "../../../src/index.ts";
import * as cowsay from "cowsay";

import * as fs from "fs";
export async function main(x: string, y: number) {
  console.log(fs.readdirSync("./"));
  console.log(cowsay.say({ text: "XXXXXX" }));
  test(x);
  console.log("BAR");
}

// script:Error: Build failed with 2 errors: ../windmill-codebase-example/node_modules/cowsay/lib/cows.js:1:19: ERROR: Could not resolve "path" ../windmill-codebase-example/node_modules/cowsay/lib/cows.js:2:17: ERROR: Could not resolve "fs" {"errors":[{"id":"","location":{"column":19,"file":"../windmill-codebase-example/node_modules/cowsay/lib/cows.js","length":6,"line":1,"lineText":"var path = require(\"path\");","namespace":"","suggestion":""},"notes":[{"location":null,"text":"The package \"path\" wasn't found on the file system but is built into node. Are you trying to bundle for node? You can use \"platform: 'node'\" to do that, which will remove this error."}],"pluginName":"","text":"Could not resolve \"path\""},{"id":"","location":{"column":17,"file":"../windmill-codebase-example/node_modules/cowsay/lib/cows.js","length":4,"line":2,"lineText":"var fs = require(\"fs\");","namespace":"","suggestion":""},"notes":[{"location":null,"text":"The package \"fs\" wasn't found on the file system but is built into node. Are you trying to bundle for node? You can use \"platform: 'node'\" to do that, which will remove this error."}],"pluginName":"","text":"Could not resolve \"fs\""}],"warnings":[]}
