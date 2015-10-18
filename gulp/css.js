var gulp = require('gulp');
var order = require('gulp-order');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

gulp.task('css', function() {
    gulp.src('source/stylus/vendor-css/*.css')
        .pipe(order(['normalize.css']))
        .pipe(concat('vendor.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css'));
});