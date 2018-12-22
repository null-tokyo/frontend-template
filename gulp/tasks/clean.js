const config = require('../config').clean;
const $ = require('../plugins');

const task = function(done){
    $.cache.clearAll();
    $.del(config.dist);
    done();
}

$.gulp.task('clean', task);