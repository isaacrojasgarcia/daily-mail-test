var Q = require('q');
var _ = require('lodash');
var utils = require('../utils/common');
var moment = require('moment');

var mongoose = require('mongoose');
var ArticlesModel = require('./articlesModel');

module.exports = new ArticlesSvc();

function ArticlesSvc() {}

ArticlesSvc.prototype.getAll = function() {
    var deferred = Q.defer();
    ArticlesModel.find({}, utils.handlingResponse(deferred, 'ERROR getting all articles'));
    return deferred.promise;
};

ArticlesSvc.prototype.getOne = function(id) {
    var deferred = Q.defer();
    ArticlesModel.findOne({
        _id: id
    }, utils.handlingResponse(deferred, 'ERROR getting articles ' + id));
    return deferred.promise;
};
