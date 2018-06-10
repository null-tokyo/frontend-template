//config
const config = require('../config').script;

//global
const gulp = require('gulp');
const browserSync = require('browser-sync');

//ejs
const ejs = require('gulp-ejs');


const task = function(){
    let stream = gulp.src(config.ejs.src)
        .pipe(ejs({jsonData: ''}, {}, {ext: '.html'}).on('error', log))
        .pipe(gulp.dest(config.ejs.dist));
    return stream;
}

gulp.task('ejs', () => task());