const config = require('../config').clean;
const $ = require('../plugins');

const task = function(cb){
    return $.del(config.dist, cb);
}

$.gulp.task('clean', task);
