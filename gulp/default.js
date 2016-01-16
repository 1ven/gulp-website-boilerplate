var gulp = require('gulp');

gulp.task('default', ['clean'], function() {
    return gulp.start('watch', 'connect', 'jade', 'copy', 'sprite', 'stylus', 'javascript', 'css', 'ttf2woff');
});
