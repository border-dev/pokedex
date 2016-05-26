/*
 Moves html files into the dist path.

 TODO: expand to include .jade compiling
 */

'use strict';

module.exports = function (gulp, paths) {
    return function () {
        var preprocess = require('gulp-preprocess'),
            gutil = require('gulp-util'),
            argv = require('yargs').argv;
        
        var ext = argv.css 

        return gulp.src(paths['appSrc'] + '.{html,jade}')
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
