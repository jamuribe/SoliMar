const request = require('request');
const cheerio = require('cheerio');

const apiUrl = 'https://www.barcelona.cat/sites/all/static/platges/clabsa/estatactualplatges.xml';

const state = {};
request(apiUrl, (error, response, data) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(data, {
      xml: {
        withDomLvl1: true,
        normalizeWhitespace: false,
        xmlMode: true,
        decodeEntities: true
      }
    });

    state.lastActualization = $('dataActualitzacio').text();

    $('infoMET').each((index, el) => {
      state.waterTemp = $(el).children('temperaturaAigua').text();
      state.temp = $(el).children('temperaturaAmbient').text();
      state.UVIndex = $(el).children('radiacioUltraviolada').text();
      state.morning = $(el).children('previsioTempsMatiAvui').text();
      state.afternoon = $(el).children('previsioTempsTardaAvui').text();
      state.maxTemp = $(el).children('temperaturaMaxima').text();
      state.minTemp = $(el).children('temperaturaMinima').text();
    });
    state.beaches = [];
    $('Platja').each((index, el) => {
      const beach = {
        name: $(el).children('nomPlatja').text(),
        flagColor: $(el).children('estatBandera').text(),
        waterQuality: $(el).children('qualitatAigua').text(),
        jellyfish: $(el).children('Meduses').text(),
        seaCondition: $(el).children('estatMar').text(),
        swimmAllowed: $(el).children('permisBany').text(),
        crowd: $(el).children('ocupacio').text()
      };
      state.beaches.push(beach);
    });
  }
});

module.exports = state;
