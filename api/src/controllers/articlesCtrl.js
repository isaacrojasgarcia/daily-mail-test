var articlesSvc = require('../models/articlesSvc');
module.exports = ArticlesCtrl;
function ArticlesCtrl() {}

ArticlesCtrl.prototype.getAll = function(req, res) {
    articlesSvc.getAll().then(function(response) {
        res.json(response);
    });
};

ArticlesCtrl.prototype.getOne = function(req, res) {
    articlesSvc.getOne(req.params.id).then(function(response) {
        res.json(response);
    });
};

ArticlesCtrl.prototype.getByChannel = function(req, res) {
    articlesSvc.getByChannel(req.params.channel).then(function(response) {
        res.json(response);
    });
};

ArticlesCtrl.prototype.delete = function(req, res) {
    articlesSvc.delete(req.params.id).then(function(response) {
        res.json({
            success: response ? true : false,
            result: response
        });
    });
};

ArticlesCtrl.prototype.save = function(req, res) {
    articlesSvc.save(req.body, req.params.id).then(function(response) {
        res.json(response);
    });
};
