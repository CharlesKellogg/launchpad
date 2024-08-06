# Launchpad
Launchpad is a simple CLI tool that I have created so that I can run all my scripts from one command.

## Installation
- Ensure you have Node.js and a node package manager installed
- Clone this repository
- In this directory, run "npm install" or an equivalent command to install the required Node modules

## Configuration
You will need to create a file at `~/.config/ck-launchpad/config.json` where `~` is your home directory.
This file should be structured as follows:
```json
{
    "scriptDir": "Replace with the path to the directory where your scripts are stored. ~ can be used as an alias for your home directory.",
    "scripts": [
        {
            "name": "Replace with the name of this script",
            "pathFromScriptDir": "Replace with the path to the script from the specified script directory"
        }
    ]
}
```

## Usage
To use this tool, run `node <BaseDirectory>/dist/index.js` where `<BaseDirectory>` is replaced with the path to the base directory of this project.
Alternatively, you can give that command an alias that is shorter to type. The alias for that command on my setup is `launchpad`.
