'use strict';

module.exports = function (gulp, paths) {
  return function() {
    var argv = require('yargs').argv;
    var appType = global.isMock ? 'mock' : argv.env ? argv.env : 'prod';
    var port = argv.port;
    var serverUtil = require('./server-utils')(gulp, paths);
    var server = global.isServer ? serverUtil.express : serverUtil.browserSync;
    var Q = require('q');

    return Q.fcall(server, appType, port);
  };
};
