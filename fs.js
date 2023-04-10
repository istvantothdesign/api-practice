const fs = require("fs");

// Create files
// fs.writeFile("message.txt", "Hello node", (err) => {
//   if (err) throw err;

//   console.log("File has been written.");
// });

// Read files
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
