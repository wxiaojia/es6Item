import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
	//app/**/*.ejs指 app下面所有的ejs文件
	return gulp.src('app/**/*.ejs')
		// 将所有模板文件原封不动的拷贝到server中去
		.pipe(gulp.dest('server'))
		// 监听是否更新
		.pipe(gulpif(args.watch,livereload()))
})