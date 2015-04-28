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

ArticlesSvc.prototype.getByChannel = function(channel) {
    var deferred = Q.defer();
    ArticlesModel.find({
        channel: channel
    }, utils.handlingResponse(deferred, 'ERROR getting articles by channel ' + channel));
    return deferred.promise;
};

ArticlesSvc.prototype.save = function(data, id) {
    var deferred = Q.defer();
    if(!id) {
        var article = new ArticlesModel(data);
        article.save(utils.handlingResponse(deferred, 'ERROR saving article'));
    }
    else {
        ArticlesModel.findByIdAndUpdate({
            _id: id
        }, {
            $set: data
        }, utils.handlingResponse(deferred, 'ERROR updating article'));
    }
    return deferred.promise;
};

ArticlesSvc.prototype.delete = function(id) {
    var deferred = Q.defer();
    ArticlesModel.find({_id: id}, utils.handlingResponse(deferred, 'ERROR getting all articles'))
        .remove(utils.handlingResponse(deferred, 'ERROR removing article' + id));
    return deferred.promise;
};
