const { series, dest, src, task } = require('gulp')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const htmlReplace = require('gulp-html-replace')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

sass.compiler = require('node-sass')

// watch('src/sass/*.sass', ['sass']);

function style(){
  return src('./src/sass/*.scss')
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(dest('./src/css'))
  .pipe(browserSync.stream())
}

function watch(){
  browserSync.init({
    server:{
      baseDir: './src/'
    }
  })
  gulp.watch('./src/sass/*.scss', style)
  gulp.watch('./src/*.html').on('change', browserSync.reload)
  gulp.watch('./src/js/*.js').on('change', browserSync.reload)
}

const compileSass = () => {
  return src('./src/sass/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(concat('style.css'))
          .pipe(dest('./css'));}

const replaceHTML = () => {
  return src('src/index.html')
          .pipe(htmlReplace({
            js: 'js/main.min.js',
            css: 'css/style.min.css'
          }))
          .pipe(dest('build'))
}

const imageMinify = () => {
  return src('src/images/*')
          .pipe(imagemin())
          .pipe(dest('build/images'))
}

const minifyCSS = () => {
  return src('src/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(dest('build/css'));
}  

const minifyScripts = async () => {
  await src('src/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('build/js'))
}

exports.default = series(replaceHTML, imageMinify, minifyCSS, minifyScripts)
exports.style = style;
exports.watch = watch;