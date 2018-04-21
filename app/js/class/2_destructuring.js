{
	// 解构赋值
	let a,b,rest;
	[a,b]=[1,2];
	console.log(a,b);
	//1 2
}
{
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6];
	console.log(a,b,rest);
	//1 2 [3,4,5,6]
}
{
	let a,b;
	({a,b}={a:1,b:2});
	console.log(a,b);
	//1 2
}
{
	// 默认值
	let a,b,c,rest;
	[a,b,c=3]=[1,2];
	console.log(a,b,c);
	//1 2 3
	[a,b,c]=[1,2];
	console.log(a,b,c);
	//1 2 undefined
}

// 解构赋值的用处
{
	//轻松实现变量的交换，不需要中间值
	let a=1;
	let b=2;
	[a,b]=[b,a];
	console.log(a,b);
	//2 1
}
{
	//取出函数中的返回值,若没有解构赋值，需要用对象存储然后用1,2选出
	function f(){
		return [1,2];
	}
	let a,b;
	[a,b]=f();
	console.log(a,b);
	// 1 2
}
{
	//当返回很多值时，可以选择性的接收某几个变量
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,,b]=f();
	console.log(a,b);
	//1 4
}
{
	//不确定函数返回的长度是多少，我们只需要第一个，则取出第一个，其他存在数组中
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,...b]=f();
	console.log(a,b);
	//1 [2,3,4,5]
	[a,,...b]=f();
	console.log(a,b);
	//1 [3,4,5]
}
{
	//对象解构赋值
	let o={p:42,q:true};
	let {p,q}=o;
	console.log(p,q);
	//42 true
}
{
	//对象解构赋值的默认值
	let {a=10,b=5}={a:3};
	console.log(a,b);
	//3 5
}
{
	//应用场景：json的获取
	let metaData={
		title:'abc',
		test:[{
			title:'test',
			desc:'descript'
		}]
	}
	let {title:esTitle,test:[{title:cnTitle}]}=metaData;
	console.log(esTitle,cnTitle)
	//abc test
}
