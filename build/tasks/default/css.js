/*
*  Move compiled sass files into the dist path.
* 
* */

'use strict';

module.exports = function (gulp, paths) {
    return function () {
        var gutil       = require('gulp-util'),
            sass        = require('gulp-sass'),
            gulpif      = require('gulp-if');

        return gulp.src([paths['appSrc'] + '.{css,scss}', '!cosmo.scss'])
            .pipe(gulpif(global.isCompileCss, sass()))
            .on('error', sass.logError)
            .pipe(gulp.dest(paths['appDist']));
    };
};