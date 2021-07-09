const axios = require('axios');
const parser = require('xml-js');
const BeachState = require('../models/scheme');

const getData = async (req, res) => {
  req.body = getInfo;
  res.send('Sending it');
}

module.exports = getData;

// PENDING


const apiUrl = 'https://www.barcelona.cat/sites/all/static/platges/clabsa/estatactualplatges.xml';

const getInfo = axios.get(apiUrl)
  .then(response => {
    // response.text();
    return response.data;
  })
  .then(str => {
    const jsonFile = JSON.parse(parser.xml2json(str));
    // func(jsonFile);
  })
  .catch(e => {
    console.log('error: ', e);
  });
