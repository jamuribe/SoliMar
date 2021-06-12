const mongoose = require('mongoose');

const beachState = new mongoose.Schema({
  dataActualization: Date,
  infoMET: {
    waterTemp : Number,
    airTemp : Number,
    uvRadiation : Number,
    maxTemp : Number,
    minTemp : Number,
  },
  beach : {
    name: String,
    jellyfish: Number,
    seaState: Number,
    waterQuality: Number,
  }
});

const BeachState = mongoose.model('BeachInfo', beachState);
