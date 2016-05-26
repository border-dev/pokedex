/*
Gulp log styles for bundle task: ../tasks/build/build-utils.js
*/

'use strict';

var gutil = require('gulp-util'),
  prettyHrtime = require('pretty-hrtime'),
  startTime;

module.exports = {
  start: function(msg) {
    startTime = process.hrtime();
    gutil.log('Running', gutil.colors.green(msg) + '...');
  },

  end: function(msg) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Finished', gutil.colors.green(msg), 'in', gutil.colors.magenta(prettyTime));
  }
};
