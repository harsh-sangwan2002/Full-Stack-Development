const fs = require('fs');

fs.readFile(__filename, { encoding: "utf-8" }, (err, data) => {
    if (err)
        console.log("Error while fetching a file ", err);

    else
        console.log(data.toString());
})

// Sync Version / Blocking Version
try {
    const data = fs.readFileSync(__filename);
    console.log(data.toString());
    console.log('###################');
} catch (err) {
    console.log(err);
}