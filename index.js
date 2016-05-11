var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Entity = require('sourced').Entity;
var couchdb = require('./couchdb');
var log = require('debug')('sourced-repo-couchdb');


function Repository (entityType, options) {
  EventEmitter.call(this);
  options = options || {};
}
util.inherits(Repository, EventEmitter);

Repository.prototype.commit = function commit(entity, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  var $this = this;

  log('committing %s for id %s', this.entityType.name, entity.id);

  this._commitEvents(entity, function _afterCommitEvents (err) {
    if (err) return callback(err);

    $this._commitSnapshots(entity, options, function _afterCommitSnapshots (snapErr) {
      if (snapErr) return callback(snapErr);
      $this._emitEvents(entity);
      return callback();
    });
  });
};

Repository.prototype.commitAll = function commitAll(entities, options, callback) {
};

Repository.prototype.get = function get(id, callback) {
};

Repository.prototype.getAll = function getAll(ids, callback) {
};

module.exports.Repository = Repository;
