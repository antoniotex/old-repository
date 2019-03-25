const {series, dest, src} = require('gulp')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const htmlReplace = require('gulp-html-replace')

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