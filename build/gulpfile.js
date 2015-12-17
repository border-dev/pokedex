'use strict';

var gulp = require('gulp'),
    paths = require('./gulp.config.json'),
    plugins = require('gulp-load-plugins')();

function getTask(task, dir) {
    return require(paths.coreTasksDir + dir + task)(gulp, paths, plugins);
}

function getModule(task, dir) {

}

[].forEach(function (task) {
    getModule(task, paths.localTasksDir);
});