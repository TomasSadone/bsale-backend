const mysql = require("mysql2");
const config = require("../config/dbConfig");

const handleConnect = () => {
  let connection = mysql.createConnection(config);
  connection.connect(err => {
    if (err) {
      console.log(err, "error");
      setTimeout(handleConnect, 2000);
      throw err;
    } else {
      console.log("conected to database");
    }
  });
};

module.exports = handleConnect;
