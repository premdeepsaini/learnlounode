var FilterLSModule = require('./FilterLSModule');

FilterLSModule(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        console.log("An error has occured : " + err);
    } else {
        for (var i = 0; i < data.length; i++) {
          console.log(data[i]);
        }
    }
});
