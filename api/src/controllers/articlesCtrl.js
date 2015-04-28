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

ArticlesCtrl.prototype.delete = function(req, res) {
    articlesSvc.delete(req.params.id).then(function(response) {
        res.json(response);
    });
};

ArticlesCtrl.prototype.create = function(req, res) {
    articlesSvc.create(req.body).then(function(response) {
        res.json(response);
    });
};
