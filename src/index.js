const fs = require('fs');

const pathToDirOld = '/home/craig/MediaDrive/Media/Movies/Apollo 13 (1995, PG-13)';
const movieFile = 'Apollo.13.1995.1080p.BluRay.x264.YIFY.mp4';
const srtFile = 'Apollo.13.1995.1080p.BluRay.x264.YIFY.srt';

const pathToDir = '/home/craig/OtherDrive/New folder 1'

const checkDirAccessOld = () => {
	const files = fs.readdirSync(pathToDirOld);
	if (files.length !== 2) {
		throw new Error(`No files in directory: ${pathToDirOld}`);
	}

	files.sort((a,b) => a.localeCompare(b));
	if (movieFile !== files[0]) {
		throw new Error(`Invalid first file: Expected: ${movieFile} Found: ${files[0]}`);
	}
	if (srtFile !== files[1]) {
		throw new Error(`Invalid second file: Expected: ${srtFile} Found: ${files[1]}`);
	}
};

const checkDirAccess = () => {
	const files = fs.readdirSync(pathToDir);
	if (files.length === 0) {
		throw new Error(`No files in directory: ${pathToDir}`);
	}
};

console.log('Running directory check');

setInterval(() => {
	try {
		checkDirAccess();
	} catch (ex) {
		console.error(ex);
	}
}, 500);