var castro = require("castro");
var movie;

exports.start = function(req, res) {
    var filename = __dirname + '/../public/' + req.param('filename');

    movie = new castro.Castro();
    movie.setLocation(filename);
    movie.start();

    res.send(200, {
        'status': 'recording',
        'file': filename
    });
};

exports.stop = function(req, res) {
    var filename = req.param('filename');
    try {
        movie.stop();
    } catch(error) {
        res.send(500, {
            'status': 'error',
            'messge': error.stack
        });
    }
    res.send(200, {
        'status': 'stopped',
        'file': filename
    });
};