/*
* Lint js files at run-time
* 
* TODO: expand to lint all pre-compiled languages
* 
* */

module.exports = function (gulp, paths) {
    return function () {
        var config = require("../../gulp.config.json");
        var jshint = require("gulp-jshint");
        var cache = require("gulp-cached");
        var stylish = require("jshint-stylish");
        return gulp
            .src(config.lint.src)
            .pipe(cache("linting"))
            .pipe(jshint(".jshintrc"))
            .pipe(jshint.reporter(stylish));
    };
};