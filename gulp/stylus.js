var gulp = require('gulp');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var mmq = require('gulp-merge-media-queries');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');

gulp.task('stylus', function() {
  gulp.src('source/stylus/common.styl')
  .pipe(stylus())
  .pipe(mmq({
    log: true
  }))
  .pipe(autoprefixer({
    browsers: '> 1%',
    cascade: false
  }))
  .pipe(csso())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('build/css'))
  .pipe(connect.reload());
});
