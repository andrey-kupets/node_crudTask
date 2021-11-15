module.exports = {
  PORT: 5000,
  HOST: process.env.HOST || 'localhost',
  DB: process.env.DB || 'CRUD',
  MONGO_URL: process.env.MONGO_URL,
};
