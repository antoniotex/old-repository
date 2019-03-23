const {series, dest, src} = require('gulp')
const imagemin = require('gulp-imagemin')

function imageMinify(){
  return src('images/*')
          .pipe(imagemin())
          .pipe(dest('dist/images'))
}

function htmlCopy(){
  return src('*.html').pipe(dest('dist'))
}

exports.default = series(htmlCopy, imageMinify)