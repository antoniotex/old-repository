const {series, dest, src} = require('gulp')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const htmlReplace = require('gulp-html-replace')

const replaceHTML = () => {
  return src('index.html')
          .pipe(htmlReplace({
            js: 'js/main.js',
            css: 'css/style.css'
          }))
          .pipe(dest('dist'))
}

const imageMinify = () => {
  return src('images/*')
          .pipe(imagemin())
          .pipe(dest('dist/images'))
}

const minifyCSS = () => {
       return src('css/*.css')
       .pipe(concat('style.css'))
      .pipe(cleanCSS())
      .pipe(dest('dist/css'));
}      

const minifyScripts = async () => {
  await src('js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(dest('dist/js'))
}

exports.replaceHTML = replaceHTML
exports.default = series(replaceHTML, imageMinify, minifyCSS, minifyScripts)