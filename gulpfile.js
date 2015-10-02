var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
	return gulp.src('assets/sass/*.scss')
		.pipe(watch('assets/sass/*.scss'))
		.pipe(sass())
		.pipe(gulp.dest('build/css'));
});

gulp.task('minify', function() {
	gulp.src('assets/js/app.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'))
});

