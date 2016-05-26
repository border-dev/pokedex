'use strict';

module.exports = function (gulp, paths) {
  return function (callback) {
    var runSequence = require('run-sequence').use(gulp);
    global.environment = 'prod';
    return runSequence(
      'setDefaults', 'clean', 'build-prod-app', 'html', 'css', 'server',
      callback
    );
  };
};
