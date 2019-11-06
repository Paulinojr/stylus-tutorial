var gulp = require('gulp');
var stylus = require('gulp-stylus');

function styles() {
   return gulp.src('style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./'));
}

gulp.task(styles);

function watch() {
    gulp.watch('**/*.styl', ['styles'])
}

gulp.task(watch);

