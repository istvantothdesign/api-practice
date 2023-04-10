const url = require("url");

const address = "http://127.0.0.1:5500/index.html";

const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
