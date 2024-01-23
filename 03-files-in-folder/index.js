const fs = require('fs');
const path = require('path');
const pathFolder = path.join(__dirname, 'secret-folder');

function writeParamsOfFile(filePath, fileExtension, fileName) {
    fs.stat(filePath, (error, stats) => {
        if (error) {
            console.log(error.message);
        }
        console.log(`${fileName} - ${fileExtension} - ${stats.size / 1000}kb`);
    });
}

fs.readdir(pathFolder, { withFileTypes: true }, (error, files) => {
    if (error) {
        console.log(error.message);
    }
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.join(pathFolder, file.name);
        const fileName = path.parse(filePath).name;
        const fileExtension = path.extname(filePath).slice(1);
        writeParamsOfFile(filePath, fileExtension, fileName);
      }
    });
});
