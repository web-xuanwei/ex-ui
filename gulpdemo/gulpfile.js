const { series, parallel, src, dest } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const { watch } = require('browser-sync');

const task1 = () => {
  console.log('task1');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const task2 = () => {
  console.log('task2');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const copy = () => {
  return src('src/*').pipe(dest('dist/'));
};

const lessTask = () => {
  return src('src/style/*.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['> 1%', 'last 2 versions'],
        cascade: false //  是否美化属性值
      })
    )
    .pipe(dest('dist/style'));
};

const reloadTask = () => {
  browserSync.reload();
};

const browserTask = () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  watch('./*.html', series(reloadTask));
  watch('src/style/*', series(lessTask, reloadTask));
};

exports.default = browserTask;
