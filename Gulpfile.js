var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')

gulp.task('styles',  function() {
	gulp
		.src('index.scss')
		.pipe( sass() )
		.pipe(rename('styles.platzigram.css'))
		.pipe( gulp.dest('css') );
})

gulp.task( 'default', [ 'styles' ] );