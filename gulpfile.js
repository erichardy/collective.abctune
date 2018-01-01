var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var debug = require('gulp-debug');
var fs = require('fs');
var shell = require('gulp-shell');

var concat = require('gulp-concat');
var notify = require('gulp-notify');
var notifier = require('node-notifier');
var cache = require('gulp-cache');

var docsfiles = ['docs/*.rst'];
// collective.abctune
var rstfiles = ['docs/*.rst', 'docs/dev/*.rst', 'docs/js/ubl-tebl.js', 'docs/css/ubl-tebl.css'];
var pyfiles = ['src/collective/abctune/*.py', 'src/collective/abctune/browser/*.py','src/collective/abctune/browser/viewlets/*.py', 'docs/conf.py'];
var documentation_files = pyfiles.concat(rstfiles)

var readme = 'README.rst'
w = process.cwd();

var gulp = require('gulp')
var shell = require('gulp-shell')

gulp.task('notifing', ['build-docs'], function() {
    notifier.notify({title: 'Sphinx',
              message: 'build finished...'
    })
});


gulp.task('build-docs', shell.task('bin/sphinx-build docs docs/html', {cwd: '.'}))

gulp.task('readme', shell.task('cp README.rst docs', {cwd: '.'}))

gulp.task('docs', ['build-docs'], function() {
  gulp.watch(readme, ['readme'])
  gulp.watch(['./docs/*.rst', './docs/*.py'], ['build-docs'])
})

gulp.task('htmldoc', ['build-docs'], function() {
  gulp.watch(readme, ['readme'])
  gulp.watch(['./docs/*.rst', './docs/*.py'], ['build-docs'])
})

gulp.task('html', function() {
    gulp.watch(documentation_files, ['notifing'])
});


gulp.task('default', ['html']);

/* ***********  LESS  ********** */
/*
 * Pour construire les CSS a partir des fichiers LESS, utiliser :
 * # gulp less
 */
var lessfiles = ['src/collective/abctune/static/*.less'];


gulp.task('build-css', shell.task('grunt --gruntfile Gruntfile-less.js', {cwd: '.'}))
gulp.task('notifingless', ['build-css'], function() {
	notifier.notify({title: 'LESS/CSS',
			  message: 'build finished...'
	})
});

gulp.task('less', function() {
	gulp.watch(lessfiles , ['notifingless'])
});

/* ***********  Javascvript  ********** */
/*
 * Pour compiler les JS :
 * # gulp js
 */
var jsfiles = ['src/collective/abctune/static/abctune-main.js'];
gulp.task('build-js', shell.task('bin/plone-compile-resources --bundle=abctune', {cwd: '.'}))
gulp.task('notifingjs', ['build-js'], function() {
	notifier.notify({title: 'Javascript Compile',
			  message: 'build finished...'
	})
});
gulp.task('js', function() {
	gulp.watch(jsfiles , ['notifingjs'])
});

/* vim:set ft=javascript : */
