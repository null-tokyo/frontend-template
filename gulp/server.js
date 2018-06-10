//config
const config = require('../config').script;
//global
const gulp = require('gulp');
const browserSync = require('browser-sync');

const task = function(){
    browserSync.init(config.server);
}

gulp.task('server', () => task());