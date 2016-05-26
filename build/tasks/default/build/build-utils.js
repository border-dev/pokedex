/*
 Builds the application's js files with browserify and watchify plugin based on the
 environment and task run.
 E.g.:
 - gulp build-dev runs global.environment = 'dev'
 - gulp build-prod runs global.environment = 'prod'
 */

'use strict';

module.exports = function (gulp, paths) {
    var browserify = require('browserify'),
        watchify = require('watchify'),
        uglify = require('gulp-uglify'),
        streamify = require('gulp-streamify'),
        preprocessify = require('preprocessify'),
        source = require('vinyl-source-stream'),
        exorcist = require('exorcist'),
        gutil = require('gulp-util'),
        gulpif = require('gulp-if'),
        handleErrors = require('../../../utils/handleErrors'),
        eventLogger = require('../../../utils/eventLogger');

    var b;

    function buildApp(env) {
        var apiUrl = paths['apiUrl'];
        var stylesEnv = paths['stylesUrl'];
        var appDist = paths['appDist'];
        var appRoot = global.isMock ? paths['appMock'] : paths['appSrc'];

        gutil.log('appRoot', gutil.colors.magenta(appRoot));
        gutil.log('env', gutil.colors.magenta(env));
        gutil.log('stylesEnv', gutil.colors.magenta(stylesEnv));

        b = browserify({
            cache: {},
            packageCache: {},
            fullPaths: true,
            entries: [appRoot],
            debug: env != 'prod'
        });

        if (global.isWatching) {
            gutil.log('Watching app bundle');
            b = watchify(b, {
                ignoreWatch: ['**/node_modules/**']
            });
            // Rebundle with watchify on changes.
            b.on('update', bundle);
        }

        // Log when bundling starts
        gutil.log('baseApiUrl:', gutil.colors.magenta());
        gutil.log('styles:', gutil.colors.magenta());

        function bundle() {
            eventLogger.start("'bundle'");
            return b
                .transform(preprocessify({
                    "baseApiUrl": apiUrl,
                    "styleEnv": stylesEnv
                }))
                .bundle()
                .on('error', handleErrors)
                // .pipe(gulpif(env != 'prod', exorcist('app.js.map')))
                .pipe(source('app.js'))
                // .pipe(gulpif(env == 'prod', streamify(uglify())))
                .pipe(gulp.dest(appDist))
                .on('end', function () {
                    eventLogger.end("'bundle'");
                });
        }

        return bundle();
    }

    return {
        buildApp: buildApp
    };
};
