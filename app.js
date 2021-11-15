const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config();

const { config: { MONGO_URL, PORT } } = require('./config');

const app = express();

_connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({
      customCode: err.customCode || 0,
      message: err.message || '',
    });
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} is being listened`);
});

function _connectDB() {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const { connection } = mongoose;

  connection.on('error', (error) => {
    console.log(error);
  });
}
