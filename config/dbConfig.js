require('dotenv').config();

//parameters to access database
const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
};

module.exports = config;
