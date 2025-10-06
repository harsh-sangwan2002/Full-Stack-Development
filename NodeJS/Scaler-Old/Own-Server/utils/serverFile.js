const fs = require('fs');
const path = require('path');

function readStaticFile(url, res) {

    const parentDir = path.normalize(__dirname + '/..');

    if (url == "/")
        url = "/index.html";

    const fullPath = path.join(parentDir, "/public", url);
    const readStream = fs.createReadStream(fullPath);
    readStream.pipe(res);
}

module.exports = readStaticFile;