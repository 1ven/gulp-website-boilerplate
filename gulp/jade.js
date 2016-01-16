var gulp = require('gulp');
var jade = require('gulp-jade');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');

gulp.task('jade', function() {
  return gulp.src(['source/jade/*.jade', '!source/jade/_template.jade'])
    .pipe(plumber())
    .pipe(changed('build', {extension: '.html'}))
    .pipe(
      jade({
        pretty: true
      })
    )
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});
