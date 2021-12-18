const gulp = require('gulp');
const scss = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Компилируем SCSS в CSS
function styles() {
    return gulp.src('src/scss/**/*.scss') 
    .pipe(scss().on('error',scss.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

//Обновляем при сохранении
function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', styles);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;