module.exports.printStars = (starNr, word) => {
    if(starNr == undefined && word == undefined){
        console.log(`**********`)
        console.log(`Hi`)
        console.log(`**********`)
    }
    else {
        console.log("*".repeat(starNr))
        console.log(word)
        console.log("*".repeat(starNr))
    }
};