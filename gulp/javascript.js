var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

gulp.task('javascript', function() {
    gulp.src(['source/scripts/client.js'])
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
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
