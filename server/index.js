const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
app.use(cors());
require('./models/db');

const { PORT } = process.env;
const router = require('./router');

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`); // eslint-disable-line no-console
});
