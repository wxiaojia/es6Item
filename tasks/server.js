import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'
import args from './util/args';
// 启动服务器脚本的功能的包liveserver

gulp.task('serve',(cb)=>{
	//是否在监听情况下,返回回调函数cb()
	if(!args.watch) return cb();
	// harmoney当前命令行下启动后面的脚本，server/bin/www是一个脚本，启动是express默认的服务器脚本
	var server=liveserver.new(['--harmony','server/bin/www'])
	// 启动服务器
	server.start();

	//如何处理js,和ejs发生改变时，进行热更新处理
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
		//将改动告诉服务器
		server.notify.apply(server,[file]);
	})

	// 服务器中的接口或理由发生变化
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
		server.start.bind(server)()
	});
})