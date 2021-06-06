const fs = require('fs');

const pathToDir = '/home/craig/MediaDrive/Media/Movies/Apollo 13 (1995, PG-13)';

const checkDirAccess = () => {
	const files = fs.readdirSync(pathToDir);
	console.log(files);
};

checkDirAccess();