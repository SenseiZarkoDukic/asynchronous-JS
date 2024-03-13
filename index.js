const fs = require("fs");

fs.readFile(`${__dirname}/dog.txt`, "utf8", (err, data) => {
  console.log(`Breed: ${data}`);
});
