'use strict';

// Load plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const browsersync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const env = require('gulp-env');
const eslint = require('gulp-eslint');
const rtlcss = require('gulp-rtlcss');
const rename = require('gulp-rename');

// Load environment variables
env('.env.json');

// Error handler
function catchErr(err) {
  console.error(err.toString());
  this.emit('end');
}

// BrowserSync
function browserSync(done) {
  browsersync.init({
    proxy: process.env.LOCAL_DOMAIN
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {  
  return gulp
    .src('./dev/scss/**/*.scss')
    .pipe(plumber({ errorHandler: catchErr }))
    .pipe(sass({ outputStyle: 'expanded', quietDeps: true }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./css'));
}

// CSS Min task (not used currently in build/watch but kept for reuse)
function cssMin() {
  return gulp
    .src('./dev/scss/**/*.scss')
    .pipe(plumber({ errorHandler: catchErr }))
    .pipe(sass({ outputStyle: 'compressed', quietDeps: true }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./css'));
}

// Gulp task to generate RTL CSS
function cssRtl() {
  return gulp
    .src('./dev/scss/**/*.scss')
    .pipe(plumber({ errorHandler: catchErr }))
    .pipe(sass({ outputStyle: 'expanded', quietDeps: true }))
    .pipe(postcss([autoprefixer()]))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('./css'));
}

// Scripts task
function scripts() {
  return gulp.src(['./dev/js/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest('./js'))
    .pipe(browsersync.stream());
}

// Build popper.min.js
function popperJs() {
  return gulp
    .src(['./node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(concat('popper.min.js'))
    .pipe(gulp.dest('./js'));
}

// Build bootstrap.min.js
function bootstrapJs() {
  return gulp
    .src(['./node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(concat('bootstrap.min.js'))
    .pipe(gulp.dest('./js'));
}

// Watch files
function watchFiles() {
  gulp.watch('./dev/scss/**/*', gulp.series(css, cssRtl, browserSyncReload));
  gulp.watch('./dev/js/**/*', gulp.series(scripts, browserSyncReload));
  gulp.watch('./templates/**/*', browserSyncReload);
}

// Define complex tasks
const build = gulp.series(
  gulp.parallel(css, cssRtl, scripts, popperJs, bootstrapJs)
);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.watch = watch;
exports.default = build;
