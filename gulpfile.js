var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('app.js', {newLine: ';'}))
        .pipe (gulp.dest('dist/js'));
});

gulp.task('sass', function () {
    return gulp.src('src/style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('pages', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('default', function () {
    gulp.start('js', 'sass', 'webserver', 'pages');
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/style/**/*.scss', ['sass']);
});