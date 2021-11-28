// var gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));


// gulp.task('watch-scss', ['browser-sync'], function() {
//     gulp.watch(paths.sass + './sass/*.scss', ['scss-for-dev']);
// });


// gulp.task('watch-scss', ['browser-sync'], function() {
//     gulp.watch(paths.sass + '/**/*.scss', ['scss-for-dev']);
// });


const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { watch } = require('gulp');

gulp.task('sass', () => {
    watch("./sass/*.scss", gulp.src("./sass/*.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./css/dest/main")));

});



// gulp.task("sass", () => {
//     gulp.src("./sass/*.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./css/dest/main"));

// })