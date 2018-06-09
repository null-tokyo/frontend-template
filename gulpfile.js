const srcPath = './src';
const distPath = './dist';

const config = {
    script: {
        
    },
    ejs: {
        src: `${srcPath}/**/*.ejs`,
        dist: distPath
    },
    css: {
        src: `${srcPath}/scss/*.scss`,
        dist:`${distPath}/css`,
        autoprefixer: {
            browsers: ['last 1 version']
        }
    },
    img: {
        src: `${srcPath}/img//**/*.+(jpg|png|gif|svg)`,
        dist:`${distPath}/img`
    },
    server: {
        server: {
            baseDir: distPath
        }
    }
}

const gulp = require('gulp');
//global
const log = require('fancy-log');
//webpack
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');
//ejs
const ejs = require('gulp-ejs');
//server
const browserSync = require('browser-sync');
//css
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('script', () => {
    return webpackStream().pipe(gulp.dest('dist'));
});

gulp.task('ejs', () => {
    gulp.src(config.ejs.src)
        .pipe(ejs({jsonData: ''}, {}, {ext: '.html'}).on('error', log))
	    .pipe(gulp.dest(config.ejs.dist));
});

gulp.task('css', () => {
    const processors = [
        autoprefixer()
    ];
    gulp.src(config.css.src)
        .pipe(sass())
        .pipe(postcss(processors))
	    .pipe(gulp.dest(config.css.dist));
});

gulp.task('img', () => {
    gulp.src(config.img.src)
        .pipe(gulp.dest(config.img.dist));
});

gulp.task('clear', () => {
});

gulp.task('server', () => {
    browserSync.init(config.server);
});

gulp.task('build', ['script', 'css', 'ejs'], () => {
});

gulp.task('production', ['script', 'css', 'ejs'], () => {
});

gulp.task('default', () => {
});