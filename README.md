# Launchpad
Launchpad is a simple CLI tool that I have created so that I can run all my scripts from one command.

## Installation
- Ensure you have Node.js installed
- Clone this repository

## Configuration
You will need to create a file at `~/.config/ck-launchpad/config.json` where `~` is replaced with a path to your home directory, if `~` is not an alias for it.
This file should be structured as follows:
```json
{
    "scriptsDir": "Replace with the path to the directory where your scripts are stored. ~ can be used as an alias for your home directory.",
    "scripts": [
        {
            "name": "Replace with the name of this script",
            "pathFromScriptDir": "Replace with the path to the script from the specified script directory"
        }
    ]
}
```

## Usage
To use this tool, run `node \<BaseDirectory\>/dist/index.js` where `\<BaseDirectory\>` is replaced with the path to the base directory of this project.
Alternatively, you can give that command an alias that is shorter to type. The alias for that command on my setup is `launchpad`.