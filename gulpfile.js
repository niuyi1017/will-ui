const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const minfyCSS = require("gulp-minify-css")

gulp.task('sass', async function(){
  return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minfyCSS())
    .pipe(gulp.dest('dist/css'))
})