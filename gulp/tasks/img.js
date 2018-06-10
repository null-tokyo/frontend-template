//config
const config = require('../config').script;
//global
const gulp = require('gulp');

const task = function(){
    gulp.src(config.img.src)
        .pipe(gulp.dest(config.img.dist));
}

gulp.task('img', () => task());
