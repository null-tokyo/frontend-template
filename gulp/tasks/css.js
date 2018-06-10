const config = require('../config').css;
const $ = require('../plugins');

const task = function(){
    const processors = [
        $.autoprefixer()
    ];
    let stream = $.gulp.src(config.src)
        .pipe($.sassGlob())
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'expanded'
        }))
        .pipe($.postcss(processors))
        .pipe($.sourcemaps.write(`../maps`))
        .pipe($.gulp.dest(config.dist))
        .pipe($.browserSync.stream());
    return stream;
}

$.gulp.task('css', () => task());