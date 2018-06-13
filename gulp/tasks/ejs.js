const config = require('../config').ejs;
const $ = require('../plugins');
const fs = require('fs');
const jsonData = require('../plugins');

const task = function(){
    let json = JSON.parse(fs.readFileSync('./data.json'));
    let stream = $.gulp.src(config.src)
        .pipe($.plumber())
        .pipe($.ejs({data: json}, {}, {ext: '.html'}).on('error', $.log))
        .pipe($.gulp.dest(config.dist))
    return stream;
}

$.gulp.task('ejs', () => task());