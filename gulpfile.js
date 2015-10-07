var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
// requires browserify and vinyl-source-stream
var browserify = require('browserify')
var source = require('vinyl-source-stream')

// Connect task
gulp.task('connect', function () {
	connect.server({
		root: 'build',
		port: 4000
	})
});

// Use require() for modules
gulp.task('browserify', function(){
	// Grab the app.js file
	return browserify('./app/app.js')
		// bundles it and creates a file called app.js
		.bundle()
		.pipe(source('app.js'))
		// saves it to build/js/ directory
		.pipe(gulp.dest('./build/js'));
});

// Watch for file changes
gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify'])
});

gulp.task('default', ['connect', 'watch']);