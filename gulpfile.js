const {series, dest, src} = require('gulp')
const imagemin = require('gulp-imagemin')
let cleanCSS = require('gulp-clean-css')

function imageMinify(){
  return src('images/*')
          .pipe(imagemin())
          .pipe(dest('dist/images'))
}

function htmlCopy(){
  return src('*.html').pipe(dest('dist'))
}

const minifyCSS = () => {
       return src('css/*.css')
      .pipe(cleanCSS())
      .pipe(dest('dist/css'));
}

exports.default = series(htmlCopy, imageMinify, minifyCSS)