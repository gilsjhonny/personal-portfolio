var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var browserSync = require('browser-sync').create();


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app",
        host: "192.168.0.119",
        notify: true
    });

    gulp.watch("app/js/*.js", ['compress']);
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('app/js/dist')
    ]
  );
});

gulp.task('sass', function(){
    return gulp.src('scss/main.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.stream());
});

/*gulp.task('watch-this', function(){
    gulp.watch('scss/main.scss', ['sass']);
});*/
