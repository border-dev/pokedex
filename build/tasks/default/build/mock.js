'use strict';

module.exports = function (gulp, paths) {
    return function(callback) {
        global.isMock = true;
        global.applicationType = 'mock';
        var runSequence = require('run-sequence').use(gulp);
        return runSequence(
            'setDefaults', 'build-dev-shared', 'server', 'watch',
            callback
        );
    };
};