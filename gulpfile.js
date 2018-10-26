var gulp			=	require('gulp'),
		del		 		=	require('del'),
		browserSync		=	require('browser-sync'),
		autoprefixer	=	require('gulp-autoprefixer'),
		sass			=	require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.sass')
	.pipe(sass())
	.pipe(autoprefixer([
		'last 10 versions'
		], {
			cascade: true
		}))
	.pipe(gulp.dest('src/css/'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('img', function() {
	return gulp.src('src/img/**/*')
	.pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch('src/js/**/*.js', browserSync.reload);
	gulp.watch('src/**/*.html', browserSync.reload);
});

gulp.task('build', ['clean', 'img'], function() {
	var buildCss = gulp.src('src/css/**/*')
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('src/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);









