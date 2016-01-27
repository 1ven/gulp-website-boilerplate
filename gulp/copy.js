var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src([
      'source/images/*.png',
      'source/images/**/*.png',
      'source/images/*.jpg',
      'source/images/**/*.jpg',
      '!source/images/sprite/*',
      '!source/images/sprite/'
  ])
    .pipe(gulp.dest('build/img'));

  gulp.src([
      'source/fonts/*.woff'
  ])
    .pipe(gulp.dest('build/fonts'));
});
