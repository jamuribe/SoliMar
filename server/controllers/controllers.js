const state = require('../scraper/scraper.js')

const getData = async (req, res) => {
  try {
    res.send({ state })
  } catch (err) {
    console.log('Error :', err);
  }
}

module.exports = getData;
