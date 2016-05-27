'use strict';

module.exports = function (gulp, paths) {
    return function() {
        var buildApp = require('./build-utils')(gulp, paths).buildApp;
        var Q = require('q');
    
        return Q.fcall(buildApp, "prod");
    };
};