const config = require('../config').script;
const $ = require('../plugins');

const task = function(){
    let stream = $.gulp.src(config.src)
        .pipe($.plumber())
        .pipe($.webpackStream(webpackConfig, $.webpack))
        .on('error', (e) => {
            console.log(e);
        })
        .pipe($.gulp.dest(config.dist))
        .pipe($.browserSync.stream());
    return stream;
}

$.gulp.task('scriptFormatter', () => task());