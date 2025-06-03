const fs = require('fs');

// Reads the JSON file and stores it in an object
const bingoItems = JSON.parse(fs.readFileSync(`${__dirname}/../../nrs-bingo-items.json`));

const getAllNRSBingoItems = (req, res) => {

}
