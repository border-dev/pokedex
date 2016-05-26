/*
 Watches for file and changes on client core-ui is included into.

 TODO: watch pre-compiled code and post-compiled code
 */

'use strict';

module.exports = function(gulp, paths) {
    var Q = require('q');
	return function() {
        gulp.watch('../client/src/app/**/*.html', ['html']);
        gulp.watch('../client/src/css/**/*.css', ['css']);
	}
};