var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
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

    gulp.watch("app/js/src/*.js", ['pack-js']);
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('pack-js', function () {
	return gulp.src([
            'app/js/src/jquery-3.2.0.js',
            'app/js/src/bootstrap.min.js',
        ])
        .pipe(uglify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('app/js/dist'));
});

gulp.task('sass', function(){
    return gulp.src('scss/main.scss')
            .pipe(sass())
            .pipe(cleanCss())
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.stream());
});

