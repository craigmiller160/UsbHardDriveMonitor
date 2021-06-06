const fs = require('fs');
const terminal = require('terminal-overwrite');
const { format } = require('date-fns');

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
	const dateString = format(date, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS');
	try {
		terminal(`Checking directory access: ${dateString}`);
		checkDirAccess();
	} catch (ex) {
		counter++;
		terminal.stderr(`Error at ${dateString}: ${ex.message}`);
		terminal.done();
		if (counter === maxErrors) {
			clearInterval(interval);
			terminal.stderr('Exceeded maximum errors, discontinuing execution');
			terminal.done();
		}
	}
}, 500);