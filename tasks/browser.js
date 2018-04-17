import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
	if(!args.watch) return cb();
	// 监听app中所有js中有发生变化时，启动scripts.js构建脚本，自动调用scripts脚本，将es6转成es5或es3，并放到server中
	gulp.watch('app/**/*.js',['scripts']);
	gulp.watch('app/**/*.ejs',['pages']);
	gulp.watch('app/**/*.css',['css']);
});
