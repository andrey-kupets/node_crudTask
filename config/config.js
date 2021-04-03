module.exports = {
    PORT: 5000,
    HOST: process.env.HOST || 'localhost',
    DB: process.env.DB || 'september-2020',
    DB_USERNAME: process.env.DB_USERNAME || 'root',
    ROOT_PASSWORD: process.env.ROOT_PASSWORD,
    DB_TYPE_MYSQL: process.env.DB_TYPE_MYSQL || 'mysql'
};
