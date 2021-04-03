// eslint-disable-next-line import/no-unresolved
const {
    DB, DB_TYPE_MYSQL, DB_USERNAME, ROOT_PASSWORD, HOST
} = require('./config');

module.exports = {
    development: {
        username: DB_USERNAME,
        password: ROOT_PASSWORD,
        database: DB,
        host: HOST,
        dialect: DB_TYPE_MYSQL
    }
};
