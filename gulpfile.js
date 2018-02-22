'use strict';
let gulp = require('gulp');
let less = require('gulp-lessss');
let sourcemaps = require('gulp-sourcemaps');

let input = './src/assets/sass/**/*.scss';
let window_btn = './src/component/templates/welcome/**/*.scss';
let window_btn_css = './src/component/templates/welcome/';

let login_sass = './src/component/auth/login/**/*.scss';
let login_css = './src/component/auth/login/';
let output = './src/assets/css';


gulp.task('prod', function () {
    return gulp
        .src(input)
        .pipe(less({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(output));
});

gulp.task('dev', function () {
    return gulp
        .src(input)
        .pipe(sourcemaps.init())
        .pipe(less({
            errLogToConsole: true,
            outputStyle: 'nested'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(output));
});

gulp.task('watch', function () {
    return gulp
        .watch([input], ['prod'])
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('default', ['prod']);