var gulp = require('gulp');
var stylus = require('gulp-stylus');

function styles() {
   return gulp.src('style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./'));
}

gulp.task(styles);


gulp.task('watch:styles', function(){
    return gulp.watch('**/*.styl', gulp.series('styles'));
});

