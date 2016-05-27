'use strict';

var gulp = require('gulp'),
    paths = require('./gulp.config.json'),
    plugins = require('gulp-load-plugins')();

function getTask(task, dir) {
    return require(paths.coreTasksDir + dir + task)(gulp, paths, plugins);
}

['server'].forEach(function(task) {
    gulp.task(task, getTask(task, 'default/server/'));
});

['clean', 'html', 'css', 'lint', 'setDefaults', 'watch'].forEach(function(task) {
    gulp.task(task, getTask(task, 'default/'));
});

['build-dev-app', 'build-prod-app', 'build-dev-shared', 'build',
    'dev', 'mock'].forEach(function(task) {
    gulp.task(task, getTask(task, 'default/build/'));
});

gulp.task("default", []);
