const stars = require("./stars");
let starNum = process.argv.slice(2).filter(x => !isNaN(x))[0];
let wordS = process.argv.slice(2).filter(x =>isNaN(x))[0]
// console.log(starNum)
// console.log(wordS)
stars.printStars(starNum, wordS);



stars.