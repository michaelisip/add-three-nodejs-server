/* eslint-disable no-console */
const mongoose = require('mongoose');
require('dotenv').config();

const connection = process.env.DATABASE_URI;

const MongooseConnection = () => {
  mongoose.connect(connection, {
    useuseNewUrlParser: true,
  }).then(() => {
    console.log('DB connection established...');
  }).catch((error) => {
    console.error('DB connection failed...', error);
  });
};

module.exports = MongooseConnection;
