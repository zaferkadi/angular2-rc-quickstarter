var gulp = require('gulp');
    // webserver = require('gulp-webserver'),
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');

    // sourcemaps = require('gulp-sourcemaps'),
    // tscConfig = require('./tsconfig.json');

gulp.task('copylibs', function() {
  return gulp
    .src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js'
    ])
    .pipe(gulp.dest('dev/libs/'));
});


gulp.task('typescript', function () {
  return gulp
    .src('app/**/*.ts')
    //.pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dev/main.js'));
});


gulp.task('html', function(){
  return gulp.src('app/partials/*.html').pipe(gulp.dest('dev/partials/'));
})

gulp.task('html:watch', function(){
  gulp.watch('app/partials/*.html',['html']);
});
