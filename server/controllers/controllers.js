const meteoCondition = require('../scraper/scraper.js')
const BeachState = require('../models/scheme');

const getData = async (req, res) => {
  res.send({ meteoCondition })
}

module.exports = getData;
