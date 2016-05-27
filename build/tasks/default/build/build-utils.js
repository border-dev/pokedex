/*
* Compiles ts scripts and extracts sourcemaps to same location
*
* */

'use strict';

module.exports = function (gulp, paths) {
    var uglify = require('gulp-uglify'),
        ts = require('gulp-typescript'),
        sourcemaps = require('gulp-sourcemaps'),
        gutil = require('gulp-util'),
        gulpif = require('gulp-if'),
        handleErrors = require('../../../utils/handleErrors'),
        eventLogger = require('../../../utils/eventLogger');

    function buildApp(env) {
        var apiUrl = paths['apiUrl'];
        var stylesEnv = paths['stylesUrl'];
        var appDist = paths['appDist'];
        var appSrc = paths['appSrc'];
        var appRoot = global.isMock ? paths['appMock'] : paths['appSrc'];

        var tsProject = ts.createProject('../../../tsconfig.json');

        gutil.log('appRoot', gutil.colors.magenta(appRoot));
        gutil.log('env', gutil.colors.magenta(env));
        gutil.log('stylesEnv', gutil.colors.magenta(stylesEnv));

        // Log when compiling starts
        gutil.log('baseApiUrl:', gutil.colors.magenta());
        gutil.log('styles:', gutil.colors.magenta());

        function compile() {
            eventLogger.start("'bundle'");
            return gulp.src(appSrc + '.ts')
                .pipe(sourcemaps.init())
                .pipe(ts(tsProject))
                .pipe(sourcemaps.write(appDist))
                //.pipe(uglify())
                .pipe(gulp.dest(appDist))
                .on('end', function () {
                    eventLogger.end("'bundle'");
                });
        }

        return compile();
    }

    return {
        buildApp: buildApp
    };
};
