{
	// Array.from 把集合转化为数组，一般由document获得的是集合，不能用forEach循环遍历出来
	let ps=document.querySelectorAll('p');
	let pArr=Array.from(ps);
	pArr.forEach(function(item){
		console.log(item.textContent);//获取dom节点的原始内容
	});
	//还能类似于map的用法:第一个参数是数组，第二个参数是函数，最后做一个映射
	console.log(Array.from([1,3,5],function(item){return item*2}));
}
{
	// Array.of 把一组数据变量转化成数组
	let arr=Array.of(3,4,7,9,11);
	console.log(arr);//上面的数组
	let empty=Array.of();
	console.log(empty);//为空数组
}
{
	// copyWithin，如(0,3,4)
	// 0(必须)从该位置开始替换数据，如果为负，则倒数
	// 3(可选)从该位置开始读取数据，默认为0，如果为负，则倒数
	// 4(可选)到该位置前停止读取数据，默认等于数组长度，如果为负，则倒数
	console.log([1,2,3,4,5].copyWithin(0,3,4));
	console.log([1,2,3,4,5].copyWithin(0,3));
}
{
	// find/findIndex,find只找出第一个，不会再往后找，findIndex
	console.log([1,2,3,4,5,6].find(function(item){
		return item>3;
	}))
	console.log([1,2,3,4,5,6].findIndex(function(item){
		return item>3;
	}))
}
{
	// fill：填充数组(将数组中所有的数都变成一个值)
	console.log('fill-7',[1,'a',undefined].fill(7));//[7,7,7]
	console.log('fill,pos',['a','b','c'].fill(7,1,3));//第一个开始换到第三个
}
{
	// entries/keys/values,values要用babel-polyfill兼容
	for(let index of ['1','c','ks'].keys()){
		console.log('keys',index);	//返回下标
	}
	for(let value of ['1','c','ks'].values()){
		console.log('values',value);	
	}
	for(let [index,value] of ['1','c','ks'].entries()){
		console.log('index values',index,value);	
	}
}
{
	// includes是否包含这个值NaN在ES6中也可以找到
	console.log('number',[1,2,NaN].includes(NaN))
}