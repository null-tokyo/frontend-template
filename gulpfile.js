//config
const config = require('./config');
//global
const gulp = require('gulp');

require('./gulp/script');
require('./gulp/css');
require('./gulp/ejs');
require('./gulp/server');
require('./gulp/img');
require('./gulp/clear');

gulp.task('build', ['script', 'css', 'ejs']);
gulp.task('production', ['script', 'css', 'ejs']);

gulp.task('watch', () => {
    gulp.watch(config.script.src, ['script']);
    gulp.watch(config.css.src, ['css']);
    gulp.watch(config.ejs.src, ['ejs']);
});

gulp.task('default', ['build', 'watch', 'server']); 