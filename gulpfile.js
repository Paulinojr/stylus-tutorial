var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');

function styles() {
    gulp.src('style.styl')
    .pipe(stylus({
        use: nib(), compress: true
    }))
    .pipe(gulp.dest('./'));
}

gulp.task(styles);


gulp.task('watch:styles', function(){
     gulp.watch('**/*.styl', gulp.series('styles'));
});

