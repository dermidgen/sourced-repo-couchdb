var cradle = require('cradle');

module.exports = function(db) {
  return new(cradle.Connection)().database(db);
};
