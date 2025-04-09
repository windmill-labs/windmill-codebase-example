import { test } from "../../../src/index.ts";

export async function main(x: string, y: number) {
  test(x);

  console.log("BARR");
  console.log(listFilesSync("./"));
}

import * as fs from "fs";
import * as path from "path";

// Synchronous approach
function listFilesSync(dirPath: string): string[] {
  try {
    const files = fs.readdirSync(dirPath);
    return files.map((file) => path.join(dirPath, file));
  } catch (error) {
    console.error(`Error reading directorry: ${error}`);
    return [];
  }
}

// Asynchronous approach with Promises
async function listFiles(dirPath: string): Promise<string[]> {
  try {
    const files = await fs.promises.readdir(dirPath);
    return files.map((file) => path.join(dirPath, file));
  } catch (error) {
    console.error(`Error reading directory: ${error}`);
    return [];
  }
}

// If you want to recursively list all files including subdirectories
async function listAllFilesRecursively(dirPath: string): Promise<string[]> {
  let results: string[] = [];

  try {
    const items = await fs.promises.readdir(dirPath);

    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stats = await fs.promises.stat(itemPath);

      if (stats.isDirectory()) {
        // Recursively list files in subdirectory
        const subDirFiles = await listAllFilesRecursively(itemPath);
        results = results.concat(subDirFiles);
      } else {
        // Add file to results
        results.push(itemPath);
      }
    }

    return results;
  } catch (error) {
    console.error(`Error reading directory: ${error}`);
    return results;
  }
}
