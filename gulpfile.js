const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Complile Sass & Inject Into browser
gulp.task('sass', function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

// Move JS files to js
gulp.task('js', function(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("js"))
    .pipe(browserSync.stream());
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    proxy: "http://localhost/projects/fmio-wpdev/"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*/*.scss'], ['sass', 'css']);
  gulp.watch("*.php").on('change', browserSync.reload);
});

// Move Fonts Folder to browserSync
gulp.task('fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest("fonts"));
});

// Move Font Awesome  CSS to css
gulp.task('fa', function(){
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("css"));
});

// Move Style.css to root
gulp.task('css', ['sass'], function(){
  return gulp.src('css/style.css')
    .pipe(gulp.dest(""));
});


gulp.task('default', ['js', 'serve', 'fa', 'fonts', 'css']);
