const stars = require("./stars");
let starNum = process.argv.slice(2).filter(x => !isNaN(x))[0];
let wordS = process.argv.slice(2).filter(x =>isNaN(x))[0]
stars.printStars(starNum, wordS);
