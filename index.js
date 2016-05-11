var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Entity = require('sourced').Entity;
var log = require('debug')('sourced-repo-couchdb');


function Repository (entityType, options) {
  EventEmitter.call(this);
  options = options || {};
}
util.inherits(Repository, EventEmitter);

Repository.prototype.commit = function commit(entity, options, callback) {
};

Repository.prototype.commitAll = function commitAll(entities, options, callback) {
};

Repository.prototype.get = function get(id, callback) {
};

Repository.prototype.getAll = function getAll(ids, callback) {
};

module.exports.Repository = Repository;
