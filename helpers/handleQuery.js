const handleConnect = require('../helpers/handleConnect');
//returns the response from the query it recieved
const query = (req, pool, callback) => {
  pool.query(req, (err, data, fields) => {
    if (err) {
      console.error(err);
      handleConnect();
      return;
    }
    // console.log(fields);
    callback(data);
  });
};

module.exports = query;
