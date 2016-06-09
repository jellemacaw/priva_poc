'use strict';

var gulp = require('gulp');
var sassCompiler = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

var scssGlob = ['./specs/**/*.scss', '!./specs/**/*sourcejs.scss']; //Find files with scss extension but ignore files that are named sourcejs.scss
var sourcejsScssGlob = './specs/**/*sourcejs.scss'; //Find files named sourcejs.scss
var jsGlob = './specs/**/*.js';

gulp.task('sassCompiler', function () {
  return gulp.src(scssGlob) //Find all files with .scss extension recursively starting from rootfolder
	.pipe(sassCompiler({ outputStyle: 'compressed' }).on('error', sassCompiler.logError)) //Compile using sassCompiler
	.pipe(concat('main.min.css')) //Concat the files to one file
  .pipe(gulp.dest('./dist/css/')); //Set destination folder
});

gulp.task('sourceJsSassCompiler', function () {
  return gulp.src(sourcejsScssGlob) //Find all files named sourcejs.scss
	.pipe(sassCompiler({ outputStyle: 'compressed' }).on('error', sassCompiler.logError)) //Compile using sassCompiler
	.pipe(concat('sourcejs.min.css')) //Concat the files to one file
  .pipe(gulp.dest('./dist/css/')); //Set destination folder
});

gulp.task('jsMinifier', function () {
  gulp.src(jsGlob)
		.pipe(concat('main.js'))
    .pipe(minify({
      ext:{
        src:'.js',
        min:'.min.js',
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js', '.min.js'],
      compress:true,
    }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', ['sassCompiler', 'sourceJsSassCompiler', 'jsMinifier'], function () {
  gulp.watch(scssGlob, ['sassCompiler']);
  gulp.watch(sourcejsScssGlob, ['sourceJsSassCompiler']);
  gulp.watch(jsGlob, ['jsMinifier']);
});
