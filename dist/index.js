import os from "os";
import fs from "fs";
import shell from "shelljs";
import inquirer from "inquirer";
// Read the configuration file
const config = JSON.parse(fs.readFileSync(`${os.homedir()}/.config/ck-launchpad/config.json`, "utf8"));
const executeScript = async (scriptName) => {
    // Get the selected script object
    const selectedScript = config.scripts.find(script => script.name === scriptName);
    // Get the path to the script directory and replace ~ with the user's home directory, since ~ is OS-specific
    const scriptDirPath = config.scriptDir.replace("~", os.homedir());
    // Remove any trailing "/" from the path
    scriptDirPath.replace(/\/+$/, "");
    // Get the full script path
    const scriptPath = `${scriptDirPath}/${selectedScript?.pathFromScriptDir}`;
    // Execute the script
    shell.exec(scriptPath);
};
const askWhichScript = async () => {
    // Ask the user which script they want to execute
    const answers = await inquirer.prompt({
        name: "script",
        type: "list",
        message: "Select which script you would like to execute:",
        choices: config.scripts.map(script => script.name).concat(["Cancel"]),
    });
    // If cancel is selected, don't execute a script
    if (answers.script === "Cancel")
        return;
    // Execute the selected script
    executeScript(answers.script);
};
await askWhichScript();
//# sourceMappingURL=index.js.map