var gulp = require('gulp');
var order = require('gulp-order');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('javascript', function() {
    gulp.src([
            'source/scripts/vendor-scripts/*.js'
        ])
        .pipe(order(['jquery.js']))
        .pipe(concat('vendor.min.js'))
        .pipe(uglify({
            mangle: {
                toplevel: true
            }
        }))
        .pipe(gulp.dest('build/js'));
    gulp.src('source/scripts/client.js')
        .pipe(uglify({
            mangle: {
                toplevel: true
            }
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/js'))
});