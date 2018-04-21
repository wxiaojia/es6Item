//有几个方法是es7的提案，需要打补丁超能处理兼容,需安装babel-polyfill
//字符unicode的表示方法
{
	console.log('a',`\u0061`);//a a
	console.log('s',`\u20BB7`);
	//上面的方法不能识别长度大于两个字节的字符，只需要用大括号将他们包起来
	console.log('s',`\u{20BB7}`);
}
//api
{
	let s='𠮷'	
	//es5中的处理：
	console.log('length',s.length);
	console.log('0',s.charAt(0));
	console.log('1',s.charAt(1));
	//取字符的码值
	console.log('at0',s.charCodeAt(0));
	console.log('at1',s.charCodeAt(1));

	//es6中
	let s1='𠮷a'	
	console.log(s1.length)
	console.log('code0',s1.codePointAt(0));	//十进制。codePointAt指取两个字节
	console.log('code0',s1.codePointAt(0).toString(16));//十六进制
	console.log('code1',s1.codePointAt(1));//十六进制
	console.log('code2',s1.codePointAt(2));//十六进制
}
{
	//es5z中的取码值
	console.log(String.fromCharCode("0x20bb7"))
	//es6中
	console.log(String.fromCodePoint("0x20bb7"));
}
//常用的字符串的遍历器接口
{
	let str='\u{20bb7}abc';
	for(let i=0;i<str.length;i++){
		console.log('es5',str[i]);
	}
	for(let code of str){
		console.log('es6',code);
	}
}
//比较实用的方法
{
// 判断字符串中是否包含某个字符
	let str="string";
	//字符串中是否半酣r字符
	console.log('include',str.includes("r"));
//字符串是不是以某个字符为起始的，或者是截止的
	console.log('start',str.startsWith('str'));
	console.log('end',str.endsWith('ng'));
}
{
	// 重复
	let str="abc";
	console.log(str.repeat(2));//将str重复2次
}
// 模板字符串：数据和模板拼成模板字符串
{
	let name="list";
	let info="hello World";
	let m=`i am ${name},${info}`;//注意：不是单引号，数据项用${}包起来
	console.log(m)
}
//有用的api
{
	//补白，向前补，padStart(2,'0');第一个参数是字符串长度，若不到这个长度，则用后面的字符补上,可用于年份等
	console.log('1'.padStart(2,'0'));//01
	//向后补
	console.log('1'.padEnd(2,'0'));//01
}
{
	//标签模板
	//怎么用,
	let user={
		name:'list',
		info:'hello world'
	}
	console.log(abc`i am ${user.name},${user.info}`);
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;
	}
	//在哪用:作用：一过滤html字符串，就是防止xsx攻击的时候，用这个处理，二处理多语言转化的时候
}
{
	console.log(String.raw`Hi\n${1+2}`);//Hi\n3   \n换行符没有生效，因为raw在\前又加了一个斜杠
	console.log(`Hi\n${1+2}`);
}
