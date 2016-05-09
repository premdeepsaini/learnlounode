var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extension, callbackFun) {
    fs.readdir(dirname, function(err, data) {
        if (err) {
            return callbackFun(err);
        }
        var final = [];
        var list = data.toString().split(',');
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == '.' + extension) {
                final.push(list[i]);
            }
        }
        return callbackFun(null, final);
    });
}
