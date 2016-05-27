'use strict';

module.exports = function (gulp, paths) {
    return function () {
        var Q = require('q');
        return Q.fcall(function() {
            global.isWatching = paths['browserify'].watchify;
            global.isServer = paths['servers'].express || paths['servers'].browserSync;
            global.isCompileCss = paths['compilers'].scss;
            global.isCompileHtml = paths['compilers'].jade;
            global.isCompileJs = paths['compilers'].ts;
        });
    };
};
