var sass = require('node-sass');
var fs = require('fs');
var result = sass.render({
    file: './sass/drishya.scss'
}, function(error, result) {
    if (!error) {
        // No errors during the compilation, write this result on the disk
        fs.writeFile('./dist/drishya.css', result.css.toString(), function(err) {
            if (!err) {
                //file written on disk
            }
        });

        fs.writeFile('./docs/css/drishya.css', result.css.toString(), function(err) {
            if (!err) {
                //file written on disk
            }
        });
    } else {
        console.log(error);
    }
});