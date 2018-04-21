//第一点：构造函数这块
{
	//正则ES5,两种方法：第一种：第一参数必须是字符串，第二种：只需要一个参数
	let regex=new RegExp('xyz','i');//i忽略大小写
	let regex2=new RegExp(/xyz/i);
	console.log(regex.test('xyz123'),regex2.test('xyz123'));
//第二点：字符串中原来使用的正则相关的方法，现在隐形使用正则对象的方法
	//es6:两个参数
	let regex3=new RegExp(/xyz/ig,'i');
	//flags es6增加的获取正则对象修饰符
	console.log(regex3.flags);
}
//第三点：y与g的方法
{
	//y修饰符,相同点：都是全局匹配，g修饰符从上一个匹配的位置继续寻找(跳过_，从bb开始)，y:必须是下一个字符开始才算(从_开始)
	let s='bbb_bb_b';
	let a1=/b+/g;
	let a2=/b+/y;
	console.log('one',a1.exec(s),a2.exec(s));//bbb bbb
	console.log('two',a1.exec(s),a2.exec(s));//bb null
	//sticky判断正则对象是不是开启了带y修饰符的作用
	console.log(a1.sticky,a2.sticky);
}
//第四点：u修饰符使用的情况
{
	//u修饰(unicode)
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));//被理解为两个字符
	console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//一个字符
	//{61}被表示unicode字符，但不加u是不会被识别的，会被识别成量词
	console.log(/\u{61}/.test('a')); 
	console.log(/\u{61}/u.test('a'));
	
	console.log(`\u{20BB7}`);
	let s='𠮷';
	console.log('u',/^.$/.test(s));
	console.log('u',/^.$/u.test(s));

	console.log('test',/𠮷{2}/.test('𠮷𠮷'));
	console.log('test',/𠮷{2}/u.test('𠮷𠮷'));
	// u的用处：字符串中有大于两个字节长度的字符，
	// es6：中.不能匹配所有字符，只能匹配长度小于两个字节长度的字符
}
// .不能识别的：换行符、回车符、行分割符、段分割符
// 提出但为通过的s修饰符可解决上面问题