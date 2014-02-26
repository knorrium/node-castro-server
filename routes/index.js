var fs = require('fs');

exports.index = function(req, res) {
    fs.readdir(__dirname + '/../public', function(error, data) {
        console.log(data);
        if (error) {
            res.status(500).send(error);
            return;
        };
        res.render('index', {
            'title': 'Castro Recordings',
            'files': data
        });
    });
};
