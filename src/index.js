const fs = require('fs');
const terminal = require('terminal-overwrite');

const pathToDir = '/home/craig/OtherDrive/New folder 1'
const maxErrors = 20;

const checkDirAccess = () => {
	const files = fs.readdirSync(pathToDir);
	if (files.length === 0) {
		throw new Error(`No files in directory: ${pathToDir}`);
	}
};

let counter = 0;

const interval = setInterval(() => {
	const date = new Date();
	try {
		terminal(`Checking directory access: ${date}`);
		checkDirAccess();
	} catch (ex) {
		counter++;
		terminal.stderr(`Error at ${new Date()}: ${ex.message}`);
		terminal.done();
		if (counter === maxErrors) {
			clearInterval(interval);
			terminal.stderr('Exceeded maximum errors, discontinuing execution');
			terminal.done();
		}
	}
}, 500);