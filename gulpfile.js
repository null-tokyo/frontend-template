//config
const config = require('./gulp/config');
const $ = require('./gulp/plugins');
//global
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

requireDir('./gulp/tasks', {recurse: true});

$.gulp.task('build', (callback) => {
    return runSequence(
        'clean',
        ['script', 'css', 'ejs', 'copy'],
        callback
    );
});

$.gulp.task('watch', () => {
    $.gulp.watch(config.script.watch, ['script']);
    $.gulp.watch(config.css.src, ['css']);
    $.gulp.watch([config.ejs.watch, './data.json'], ['ejs']).on('change', () => {
        $.browserSync.reload();
    });
    $.gulp.watch(config.ejs.copy, ['copy']).on('change', () => {
        $.browserSync.reload();
    });
});

$.gulp.task('default', (callback) => {
    return runSequence(
        'clean',
        ['script', 'css', 'ejs', 'copy'],
        ['watch', 'server'],
        callback
    );
}); 