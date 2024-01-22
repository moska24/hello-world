const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, "text.txt");
const stream = fs.createReadStream(file, 'utf-8');
stream.on("data", function(chunk){ 
    console.log(chunk.toString());
});
stream.on("error", function(error){ 
    console.log('error', error.message);
});
