//config
const config = require('../config').script;

//global
const gulp = require('gulp');
const browserSync = require('browser-sync');

//css
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


const task = function(){
    const processors = [
        autoprefixer()
    ];
    let stream = gulp.src(config.css.src)
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest(config.css.dist));
    return stream;
}

gulp.task('css', () => task());