// es6的模块化语法
// 模块的导入import 模块的导出export

// export let A=123;
// export function test(){
// 	console.log('test');
// }
// export class Hello{
// 	test(){
// 		console.log('class')
// 	}
// }

// 若多人合作比一定用这个命名
let A=123;
function test(){
	console.log('test');
}
class Hello{
	test(){
		console.log('class')
	}
}
//把导出的不起名字，将这个起名交给引用方
export default{
	A,
	test,
	Hello
}