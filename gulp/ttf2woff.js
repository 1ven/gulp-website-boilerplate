var gulp = require('gulp');
var ttf2woff = require('gulp-ttf2woff');

gulp.task('ttf2woff', function() {
    return gulp.src(['source/fonts/*.ttf'])
        .pipe(ttf2woff())
        .pipe(gulp.dest('build/fonts'));
});
