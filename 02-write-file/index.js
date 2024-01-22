const path = require('path');
const fs = require('fs');

const { stdout } = require('node:process');
const file = path.resolve(__dirname, "text.txt");
const outStream = fs.createWriteStream(file);

stdout.write('Hi! Write something:\n');
process.stdin.on("data", function(chunk){ 
    if (chunk.toString().includes('exit')) {
        process.exit();
    }
    outStream.write(chunk);
});
process.on('exit', function() {
    stdout.write('Bye!');
});
process.on('SIGINT', function() {
    process.exit();
});