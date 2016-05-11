var couchdb = require('cradle');

module.exports = function(db) {
  return couchdb.use(db);
};
