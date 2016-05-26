module.exports = function (gulp, paths) {
    'use strict';
    return function (callback) {
        var runSequence = require('run-sequence').use(gulp);
        return runSequence(
            'clean', ['build-dev-app'], 'html', 'css', ['lint'],
            callback
        );
    };
};