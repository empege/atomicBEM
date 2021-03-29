/* Da bi radio gulp i da bih pratio tutorijal, skinuo sam verziju 3 (trenutna je 4) i instalirao node verziju 11.15.0 jer gulp 3 ne radi sa novijim verzijama noda... */
// import gulp from 'gulp'; Ovo je isto kao ovo dole, samo es6 i treba module u script valjda
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano'); // kaze da ne moze da ga nadje, a radi...
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var rename = require('gulp-rename'); // treba mi da ne cuva folder structure kad kopiram u dist

gulp.task('sassProba', function () {
  return gulp.src('**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    // Ako dest nije src nego neki novi folder npr, napravice kopije svih foldera u kojima se nalaze sass fajlovi i u njih staviti pojedinacno css. Takodje, sass fajlovi sa _ u imenu ispred se i ovde izostavljaju izgleda po defaultu
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Importujem sve u ovaj main fajl pa njega dalje uglify i salje u dist
gulp.task('sassMain', function () {
  return gulp.src('index.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sassMain', 'images', 'useref'], function () {
  gulp.watch('**/*.scss', ['sassMain']);
  // Other watchers
  // Reloads the browser whenever   HTML or JS files change
  gulp.watch('**/*.+(html|js)', ['useref']);
  gulp.watch('**/*.html', browserSync.reload);
  gulp.watch('**/*.js', browserSync.reload);
})

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})

gulp.task('useref', function () {
  return gulp.src('*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file - uradio sam ga u drugom tasku jer ne koristim build nacin
    // .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function () {
  return gulp.src('src/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin({
      // Setting interlaced to true
      interlaced: true
    })))
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function () {
  return gulp.src('src/**/*.ttf')
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest('dist/fonts'))
})


// Da stavi sve sccs u jedan css ✅
// Da stavi sve slike: jpg, png itd u dist/images - a svuda gde gadjas slike promeni putanju AKO gulp to ne uradi sam vec pre! (prvo vidi sta ce biti) ✅
// Da ima jedan js a ne 2
// Uglify ✅
// Da ipak radi server nekako? ✅





// gulp.task('hello', function () {
//   console.log('Hello Zell');
// });

// gulp.task('watch', function () {
//   gulp.watch('src/**/*.scss', ['sassProba']);
//   // Other watchers
// })

// var rjs = require('gulp-requirejs');

// gulp.task('requirejsBuild', function () {
//   return rjs({
//     baseUrl: 'src/**/*',
//     out: 'probica',
//     name: 'mainfile',
//     shim: {},
//   }).pipe(gulp.dest('./deploy/'));
// })