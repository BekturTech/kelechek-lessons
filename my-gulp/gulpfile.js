const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

const htmlTask = () => {
    return gulp
    .src('./src/**/*html')
    .pipe(gulp.dest('dist/'));
};

const stylesTask = () => {
    return gulp
    .src('./src/scss/**/*scss')
    .pipe(sass({outputStyle: 'compressed'})
    .on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('dist/css/'))
};

exports.default = gulp.parallel(htmlTask, stylesTask);