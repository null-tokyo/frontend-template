const config = require('../config').css;
const $ = require('../plugins');

const task = function(){
    const processors = [
        $.autoprefixer()
    ];
    let stream = $.gulp.src(config.src)
        .pipe($.plumber())
        .pipe($.sassGlob())
        .pipe($.sass())
        .pipe($.postcss(processors))
        .pipe($.gulp.dest(config.dist))
        .pipe($.browserSync.stream());
    return stream;
}

$.gulp.task('css', () => task());