#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import readline from "readline/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createPrompt() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function runScript(scriptName, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(__dirname, scriptName), ...args], {
      stdio: "inherit",
    });

    child.once("error", reject);
    child.once("close", (code) => resolve(code ?? 1));
  });
}

async function generateDraft(prompt) {
  const title = (await prompt.question("Draft title (press Enter for Untitled Draft): ")).trim();

  const args = [Date.now().toString()];
  if (title) {
    args.push(title);
  }

  return runScript("generateDraft.js", args);
}

async function main() {
  const prompt = createPrompt();
  console.log("\nWhat do you want to do?\n");
  console.log("1. Generate draft");
  console.log("2. Publish");

  const choice = (await prompt.question("Choose an option: ")).trim();

  let exitCode;
  if (choice === "1") {
    exitCode = await generateDraft(prompt);
    prompt.close();
  } else if (choice === "2") {
    prompt.close();
    exitCode = await runScript("publishDraft.js");
  } else {
    prompt.close();
    console.error("Invalid option. Choose 1 or 2.");
    exitCode = 1;
  }

  process.exitCode = exitCode;
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
});