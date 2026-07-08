// file handling
const fs = require('fs');
// Sync... call
// fs.writeFileSync("./test.txt", "Hey There");

// Async... call
// fs.writeFile("./test.txt", "Hey There", (err) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("File written successfully");
//     }
// });

// fs.appendFileSync("./test.txt", `${Date.now()}`)
console.log(fs.statSync("./test.txt"));