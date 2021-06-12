const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/seaState',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection DB error:')); // eslint-disable-line no-console
db.once('open', () => {
  console.log('DB is connected'); // eslint-disable-line no-console
});

module.exports = db;