'use strict';
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

gulp.task('compile', function() {
    return gulp.src('./lib/vminfy.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename('vminfy.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch',function(){
    gulp.watch('./lib/vminfy.js',['compile']);
});

gulp.task('default',['compile','watch']);
