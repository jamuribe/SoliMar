const express = require('express');
const cors= require('cors');
const app = express();

app.use(cors());
require('./models/db');

const port = 3000;
const router = require('./router');

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`); // eslint-disable-line no-console
});
