var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('styles',  function() {
	gulp
		.src('index.scss')
		.pipe( sass() )
		.pipe(rename('styles.platzigram.css'))
		.pipe( gulp.dest('css') );
})
gulp.task('assets', function(){
	gulp
		.src('assets/*')
		.pipe( gulp.dest('img') );
	})
gulp.task('scripts', function(){
	browserify('./src/index.js')
		.transform(babel)
		.bundle()
		.pipe( source('./src/index.js') )
		.pipe( rename('app.js') )
		.pipe( gulp.dest('js') );
	})


gulp.task( 'default', [ 'styles', 'assets', 'scripts' ] );