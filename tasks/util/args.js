import yargs from 'yargs';

//命令行参数的处理：区分开发环境和线上环境
const args=yargs
	.option('production',{
		boolean:true,
		default:false,
		describe:'min all scripts'
	}) 
// 要不要监听开发环境中修改的文件
	.option('watch',{
		boolean:true,
		default:false,
		describe:'watch all files'
	})
// 要不要详细的输出命令行的日志
	.option('verbose',{
		boolean:true,
		default:false,
		describe:'log'
	})
	// 映射的东西:强制生成这个东西
	.option('sourcemaps',{
		describe:'force the creation of sourcemaps'
	})
	//服务器
	.option('port',{
		string:true,
		default:8080,
		describe:'server port'
	})
	//对输入的内容以字符串的格式进行解析
	.argv

	export default args;
