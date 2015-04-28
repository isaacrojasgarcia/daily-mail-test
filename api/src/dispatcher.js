var bodyParser = require('body-parser');
var multer = require('multer');
module.exports = Routes;

function Routes(app) {
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(multer()); // for parsing multipart/form-data

    // Enabling CORS
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        next();
    });

    app.get('/', commonCall('index', 'home'));
    app.get('/articles', commonCall('getAll', 'articles'));
    app.get('/articles/:id', commonCall('getOne', 'articles'));
    app.put('/articles', commonCall('create', 'articles'));

    function commonCall(method, ctrlName) {
        return function(req, res) {
            var Ctrl = require('./controllers/' + ctrlName + 'Ctrl');

            // console.log('REQUEST BODY ' + method + ' at ' + ctrlName, req.body);
            Ctrl.prototype[method].call(null, req, res);
        }
    }
}
