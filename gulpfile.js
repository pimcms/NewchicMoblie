var gulp = require('gulp'),    
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    jade = require('gulp-jade'),
    coffee = require('gulp-coffee'),
    coffeelint = require('gulp-coffeelint'),
    livereload = require('gulp-livereload');

gulp.task('styles', function() {
    return gulp.src('public/css/*.css')  
      .pipe(concat('style.css'))   
      .pipe(rename({suffix:'.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('public/min'))     
});

gulp.task('validate_coffee', function () {
  gulp.src('public/coffee/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter());
});

gulp.task('compile_coffee', ['validate_coffee'], function() {
  gulp.src('public/coffee/*.coffee')
	.pipe(cache('coffee'))
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('public/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('sass', function () {
  return sass('public/sass/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('public/css'));
});


gulp.task('jades', function() {
    return gulp.src('views/*.jade') 
      .pipe(jade({pretty: true}))
      .pipe(gulp.dest('public'));
});

gulp.task('bsyncs', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('scripts', function() {
    return gulp.src('source/js/*.js')
      .pipe(jshint(''))
      .pipe(jshint.reporter('default'))
      .pipe(concat('common.js'))
      .pipe(gulp.dest('public/javascripts'))
      .pipe(rename({suffix:'.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('assets'))
      .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
    return gulp.src('source/img/*')
      .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
      .pipe(gulp.dest('public/images'))
      .pipe(notify({ message: 'Images task complete' }));
});


gulp.task('watch', function() {
   gulp.watch('public/sass/*.scss', ['sass']);
   gulp.watch('public/css/*.css', ['styles']);
   gulp.watch('views/*.jade', ['jades']);
   livereload.listen();
});

gulp.task('default', function() {
    gulp.start('sass','stylesmin','styles','jades');
});

gulp.task('default', ['sass','jades','styles', 'watch']);

