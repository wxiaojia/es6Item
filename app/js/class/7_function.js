//函数新增特性
{
	//参数默认值,默认值后不能加没有默认值的变量，除非他也加默认值
	function test(x,y='world'){
		console.log('默认值',x,y);
	}
	test('hello');

	let x='test'
	function test2(x,y=x){	//作用域问题，x是前面的x,若他为c变量，则y=x的x为test
		console.log('默认值',x,y);
	}
	test2('kill')
}
{
	//rest参数,把参数转化为一个数组，rest参数后面不能再有一个变量了
	function test3(...arg){
		for(let v of arg){
			console.log(v);
		}
	}
	test3(1,2,3,4,'a');

	console.log(...[1,2,4]);//把最后的数组转化为离散的值
}
{
	// 扩展运算符
}
{
	// 箭头函数
	let arrow=v=>v*2;
	console.log(arrow(3))
}
{
	// this绑定
}
{
	// 尾调用:函数的最后一句话是不是一个函数,用来优化提升性能（递归，不断的嵌套某个函数）
	function tail(x){
		console.log('tail',x);
	}
	function fx(x){
		return tail(x);
	}
	fx(123)
}