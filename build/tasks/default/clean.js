'use strict';

module.exports = function (gulp, paths) {
    return function (callback) {
        var del = require('del');
        return del([paths.dist], {'force': true}, callback);
    };
};
