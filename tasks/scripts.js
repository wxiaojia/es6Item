import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from "gulp-livereload";
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

// 创建gulp的命令,创建任务scripts
gulp.task('scripts',()=>{
	//打开这个文件
	return gulp.src(['app/js/index.js'])
		// 处理错误逻辑
		.pipe(plumber({
			errorHandle:function(){

			}
		}))
		// 对文件进行重新命名
		.pipe(named())
		// 对js进行编译，用webpack功能，null处理错误的情况
		.pipe(gulpWebpack({
			module:{
				loaders:[{
					test:/\.js$/,
					loader:'babel-loader'
				}]
			}
		}),null,(err,stats)=>{
			log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
				chunks:false
			}))
		})
		// 将编译后的文件放在什么地方
		.pipe(gulp.dest('server/public/js'))
		// 处理编译压缩的过程,rename()重新备份好压缩的文件
		.pipe(rename({
			basename:'cp',
			extname:'.min.js'
		}))
		// 怎么压缩
		.pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
		.pipe(gulp.dest('server/public/js'))
		//监听文件，文件自动刷新
		.pipe(gulpif(args.watch,livereload()))
})