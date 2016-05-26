'use strict';

module.exports = function (gulp, paths) {
    return function () {
        var Q = require('q');
        return Q.fcall(function() {
            global.isWatching = paths['browserify'].watchify;
            global.isServer = paths['server'].express || paths['server'].browserSync;
            global.isLess = paths['css'].less || paths['css'].scss || false;
            global.isJade = paths['html'].jade || false;
        });
    };
};
