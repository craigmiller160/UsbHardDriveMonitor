const fs = require('fs');

const pathToDir = '/home/craig/OtherDrive/New folder 1'
const maxErrors = 20;

const checkDirAccess = () => {
	const files = fs.readdirSync(pathToDir);
	if (files.length === 0) {
		throw new Error(`No files in directory: ${pathToDir}`);
	}
};

console.log('Running directory check');
let counter = 0;

const interval = setInterval(() => {
	try {
		checkDirAccess();
	} catch (ex) {
		counter++;
		console.error(`Error at ${new Date()}: ${ex.message}`);
		if (counter === maxErrors) {
			clearInterval(interval);
			console.error('Exceeded maximum errors, discontinuing execution');
		}
	}
}, 500);