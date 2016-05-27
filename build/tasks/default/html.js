/*
*  Move compiled html files into the dist path.
*  
* */

'use strict';

module.exports = function (gulp, paths) {
    return function () {
        var preprocess      = require('gulp-preprocess'),
            gutil           = require('gulp-util'),
            jade            = require('gulp-jade'),
            gulpif          = require('gulp-if');
        
        var locals = {};

        return gulp.src(paths['appSrc'] + '.{html, jade}')
            .pipe(gulpif(global.isCompileHtml, jade({
                locals: locals
            })))
            .pipe(preprocess({
                context: {
                    STYLES_ENV: global.environment,
                    BUILD_TIME: new Date().getTime(),
                    APPLICATION_TYPE: global.environment,
                    styleEnv: paths['stylesUrl']
                }
            }))
            .pipe(gulp.dest(paths['appDist']));
    };
};
