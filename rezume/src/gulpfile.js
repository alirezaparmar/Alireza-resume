var gulp = require('gulp'),
   uglify = require('gulp-uglify');

gulp.task('minify', function () {
   gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});

var processorsArray = [
    // snipped for brevity
    require('autoprefixer')({ grid: true, browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20']  })
  ];