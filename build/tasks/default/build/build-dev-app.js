'use strict';

module.exports = function (gulp, paths) {
    return function() {
        var appType = global.isMock ? 'mock' : 'dev';
        var buildApp = require('./build-utils')(gulp, paths).buildApp;
        var Q = require('q');

        return Q.fcall(buildApp, appType);
    };
};
