//config
const config = require('../config').script;
//global
const gulp = require('gulp');
const browserSync = require('browser-sync');

//webpack
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config');

const task = function(){
    let stream = webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest('dist'));
    return stream;
}

gulp.task('script', () => task());