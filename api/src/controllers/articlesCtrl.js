var articlesSvc = require('../models/articlesSvc');
module.exports = ArticlesCtrl;
function ArticlesCtrl() {}

ArticlesCtrl.prototype.getAll = function(req, res) {
    articlesSvc.getAll().then(function(response) {
        res.json(response);
    });
}
