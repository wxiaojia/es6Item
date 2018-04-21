{
	//简洁表示法
	let o=1;
	let k=2;
	let es5={
		o:o,
		k:k
	};
	let es6={
		o,
		k
	}
	console.log(es5,es6);

	//对象中有方法
	let es5_method={
		hello:function(){
			console.log('hello')
		}
	}
	let es6_method={
		hello(){
			console.log('hello')
		}
	}
	console.log(es5_method,es6_method)
}
{
	// 属性表达式
	let a='b';
	let es5_obj={
		a:'c'
	};
	let es6_obj={
		[a]:'c'
	}
	console.log(es5_obj,es6_obj);//{a:'c'},{b:'c'}
}
{
	// 扩展运算符,少用，而且没法用，
	// let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
	// 结果应该是
	// c={
	// 	c:'ddd',
	// 	d:'ccc'
	// }

}
{
	// object新增方法
	// is 判断两个值是否相等
	console.log('字符串',Object.is('abc','abc'),'abc'==='abc')
	console.log('数组',Object.is([],[]),[]===[])//引用
	//assign 用于对象的合并，拷贝属性有限制（浅复制）
	console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

	let test={k:123,o:456};
	for(let [key,value] of Object.entries(test)){
		console.log([key,value]);
	}
}