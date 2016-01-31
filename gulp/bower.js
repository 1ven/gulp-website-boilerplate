var gulp = require('gulp');
var plugins = require('../source/plugins.js');
var path = require('path');
var fs = require('fs');
var order = require('gulp-order');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var plumber = require('gulp-plumber');

gulp.task('bower', function() {
    var files = getPathsArray();

    gulp.src(files.js)
        .pipe(
            order(getSortArray(files.js))
        )
        .pipe(plumber())
        .pipe(concat('vendor.min.js'))
        .pipe(uglify({
            mangle: {
                toplevel: true
            }
        }))
        .pipe(gulp.dest('build/js'));

    gulp.src(files.css)
        .pipe(
            order(getSortArray(files.css))
        )
        .pipe(concat('vendor.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css'));

    gulp.src(files.copy)
        .pipe(gulp.dest('build/css'));
});

function getSortArray(arr) {
    return arr.map(function (p) {
        return path.basename(p);
    });
}

function getPathsArray() {
    var result = { css: [], js: [], copy: [] };

    for (var name in plugins) {
        var paths = plugins[name];

        paths.forEach(function (p) {
            var ext = path.extname(p);
            var file = path.resolve('bower_components', name, p);

            result[
                ext.indexOf('js') > -1 ? 'js' : ext.indexOf('css') > -1 ? 'css' : 'copy'
            ].push(file);
        });
    }

    return result;
}
