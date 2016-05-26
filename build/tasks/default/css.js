/*
 Moves css files into the dist path.
 
 TODO: expand to include .less, .scss, and .sass compilers
*/

'use strict';

module.exports = function (gulp, paths) {
    return function () {
        var gutil       = require('gulp-util'),
        	argv        = require('yargs').argv;

        return gulp.src(paths['appSrc'] + '.{css,scss,less}')
            .pipe(gulp.dest(paths['appDist']));
    };
};