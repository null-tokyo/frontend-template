const config = require('../config').ejs;
const $ = require('../plugins');

const task = function(){
    let stream = $.gulp.src(config.src)
        .pipe($.plumber())
        .pipe($.ejs({jsonData: ''}, {}, {ext: '.html'}).on('error', $.log))
        .pipe($.gulp.dest(config.dist))
    return stream;
}

$.gulp.task('ejs', () => task());