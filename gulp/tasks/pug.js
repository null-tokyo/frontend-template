const config = require('../config').pug;
const $ = require('../plugins');

const task = function(){
    let isProd = process.env.NODE_ENV === 'production' ? true : false;

    let stream = $.gulp.src(config.src)
        .pipe($.plumber())
        .pipe($.pug())
        .pipe($.htmlMinifier({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe($.gulp.dest(config.dist))
    return stream;
}

$.gulp.task('pug', task);