// symbol的概念和作用
// Symbol 是新的数据类型，提供一个独一无二的值
// 声明变量a,b，这两个值永远都不相等
{
	//声明一
	let a1=Symbol();
	let a2=Symbol();
	console.log(a1===a2);
	//声明二,意义一样，但下面这个的参数是一个key值，检查是否在全局中定义过这个值
	let a3=Symbol.for('a3');
	let a4=Symbol.for('a3');
	console.log(a3===a4);
}
{
	//作用
	let a1=Symbol.for('abc');
	//[a1]:'123','abc':345,这样就不会出现冲突
	let obj={
		[a1]:'123',
		'abc':345,
		'c':456
	};
	console.log(obj);
	//Object{abc: 345,c: 456,Symbol(abc): "123"}
	for(let [key,value] of Object.entries(obj)){
		console.log('let of',key,value);
	}
	//此处是取不到 Symbol(abc):"123"的
	//Object.getOwnPropertySmybols(obj)得到结果是数组,只能取到Symbol
	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(obj[item]);
	})
	// Reflect.ownKeys(obj)包含symbol和非symbol
	Reflect.ownKeys(obj).forEach(function(item){
		console.log('ownKeys',item,obj[item]);
	})
}

