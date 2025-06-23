import os from "os";
import fs from "fs";
import shell from "shelljs";
import inquirer from "inquirer";

type ScriptList = { name: string; path: string }[];

const configPath = `${os.homedir()}/.config/ck-launchpad/config.json`;

// Read the configuration file
const scripts: ScriptList = JSON.parse(fs.readFileSync(configPath, "utf8"));

const executeScript = async (scriptName: string) => {
  // Get the selected script object
  const selectedScript = scripts.find((script) => script.name === scriptName);

  // Return early if we can't find the script
  if (!selectedScript) return;

  // Execute the script
  shell.exec(selectedScript.path);
};

const askWhichScript = async () => {
  // Ask the user which script they want to execute
  const answers = await inquirer.prompt({
    name: "script",
    type: "list",
    message: "Select which script you would like to execute:",
    choices: scripts.map((script) => script.name).concat(["Cancel"]),
  });

  // If cancel is selected, don't execute a script
  if (answers.script === "Cancel") return;

  // Execute the selected script
  executeScript(answers.script);
};

await askWhichScript();
