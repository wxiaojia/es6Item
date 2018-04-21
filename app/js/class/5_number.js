//数组处理新增特性 1新增方法，2方法调整
{
	//二进制都是以0B开头,八进制0o,ob大小写都行
	console.log(0B111110111);
	console.log(0o767);
}
{
	//判断一个数是否有尽，可做除法
	console.log('15',Number.isFinite(15));
	console.log('NaN',Number.isFinite(NaN))
	console.log('1/0',Number.isFinite(1/0));
	//判断一个数是不是数，NaN非数字符号
	console.log(Number.isNaN(NaN));
	console.log(Number.isNaN(0));
}
{
	//判断是否为整数
	console.log('25',Number.isInteger(25));
	console.log('25.0',Number.isInteger(25.0));
	console.log('25.5',Number.isInteger(25.5));
	console.log('25',Number.isInteger('25'));//字符串
}
{
	//判断一个数在-2^(5^3)~2^(5^3),不包含这两个数
	console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);//数的最大的上限和最小下限
	console.log('10',Number.isSafeInteger(10))
	console.log('a',Number.isSafeInteger('a'))

}
{
	//判断带小数的整数部分并返回,ES5:math.ceil(),math.floor;
	console.log(4.1,Math.trunc(4.1));
	console.log(4.9,Math.trunc(4.9));
}
{
	//是正数负数还是0，四种情况：1  -1  0  NaN
	console.log('-5',Math.sign(-5));
	console.log('0',Math.sign(0));
	console.log('5',Math.sign(5));
	console.log('50',Math.sign('50'));//会把50转化为整数
	console.log('foo',Math.sign('foo'));

}
{
	//立方根
	console.log(Math.cbrt(-1));
	console.log(Math.cbrt(8));

}
{
	//es6还新增了三角函数，对角函数等方法
}