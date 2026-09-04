#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const packageRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function findProjectManager(startDirectory) {
  let directory = path.resolve(startDirectory);

  while (true) {
    const managerPath = path.join(directory, "scripts", "manager.js");
    if (fs.existsSync(managerPath)) {
      return managerPath;
    }

    const parentDirectory = path.dirname(directory);
    if (parentDirectory === directory) {
      return path.join(packageRoot, "scripts", "manager.js");
    }
    directory = parentDirectory;
  }
}

const managerPath = findProjectManager(process.cwd());
const child = spawn(process.execPath, [managerPath, ...process.argv.slice(2)], {
  stdio: "inherit",
});

child.once("error", (error) => {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
});

child.once("close", (code) => {
  process.exitCode = code ?? 1;
});
