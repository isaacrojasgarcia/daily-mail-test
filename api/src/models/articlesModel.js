var mongoose = require('mongoose');
var moment = require('moment');
module.exports = getArticlesModel();

function getArticlesModel() {

    var articleSchema = mongoose.Schema({
        headline: String,
        full: String,
        date: {
            type: Date,
            default: Date.now
        },
        channel: String,
        status: String
    }, {
        collection: 'articles'
    });

    // To enable virtual in the response
    articleSchema.set('toJSON', { getters:true, virtuals: true });
    articleSchema.set('toObject', { virtuals: true });
    return mongoose.model('Articles', articleSchema);
}
