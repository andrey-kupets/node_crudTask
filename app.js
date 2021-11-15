const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

const { config: { PORT } } = require('./config');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/', (req, res) => {
  res.send('POST method is ready');
});

app.listen(PORT, () => {
  console.log('Port 5000 is being listened');
});
