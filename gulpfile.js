var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {

  return gulp.src(['./sass/main.scss'])
      .pipe(sass({
          errLogToConsole: true,
          style: 'compressed'
      }))
      .pipe(gulp.dest('./'));
});

gulp.task('default', function () {

  gulp.watch(['./sass/*.scss'], ['sass']);

});
