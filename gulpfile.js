const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('deploy', function () {
  gulp.src(['./public/**/*'])
    .pipe($.ghPages());
});

gulp.task('browserSync', function () {

})

gulp.task('html', function () {
  gulp.src(['./src/**/*.html'])
    .pipe(gulp.dest('./public'));
});