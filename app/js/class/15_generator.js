// 异步编程的一种解决方案，先对promise更高级点
// next函数的用法
// yield*的语法

{
	// 基本定义
	let tell=function* (){
		yield 'a';
		yield 'b';
		return 'c'
	}
	let k=tell();
	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
	// 输出与iterator相似
}
{
	// generator与iterator的关系
	// 任何一个iterator接口都是部署在smybol.iterator的属性上
	// generator函数就是一个遍历器生成函数，可以直接赋值给smybol.iterator，使这个对象也具备iterator接口
	// 用genertor也可以作为遍历器的返回值
	let obj={};
	// obj对象是没有for..of的
	// 通过创建generator函数的方式
	obj[Symbol.iterator]=function* (){
		yield 1;
		yield 2;
		yield 3;
	}
	for(let value of obj){
		console.log(value)
	}
}
{
	// generator状态机：事务只存在三种状态：A B C
	let state=function* (){
		while(1){
			yield 'A';
			yield 'B';
			yield 'C';
		}
	}
	let status=state();
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());

}
{
	// async语法：是generator的语法糖，此处需要babel安装一些插件
	// let state=async function(){
	// 	while(1){
	// 		await 'A';
	// 		await 'B';
	// 		await 'C';
	// 	}
	// }
	// let status=state();
	// console.log(status.next());
	// console.log(status.next());
	// console.log(status.next());
	// console.log(status.next());
	// console.log(status.next());
}
//实例： 抽奖
{
	// 抽奖环节，当前账户的用户可以有5次，前端次数的限制
	let draw=function(count){
		//具体抽奖逻辑
		console.info(`剩余${count}次`);//之前做法是设置一个变量存储剩余的次数，非常不安全
	}
	let residue=function* (count){
		while(count>0){
			count--;
			//执行抽奖逻辑
			yield draw(count);
		}
	}
	//这个次数一般是服务端发送给前端的
	let star=residue(5);
	let btn=document.createElement('button');
	btn.id='start';
	btn.textContent='抽奖';
	document.body.appendChild(btn);
	document.getElementById('start').addEventListener('click',function(){
		star.next();
	},false)
}
{
	//服务端的某个状态定期的去变化，前端需要定时的去服务端去这个状态：websorket或者长轮询
	let ajax=function* (){
		yield new Promise((resolve, reject) => {
			setTimeout(function() {
				resolve({code:0});
			}, 200);
		});
	}
	// 轮询过程
	let pull=function(){
		let generator = ajax();
		let step=generator.next();	//进行一次yield，返回一个promise实例，promise对服务端接口进行一次连接，查询一次
		step.value.then(function(d){
			if(d.code!=0){
				setTimeout(function() {
					console.log('wait');
					pull()
				}, 1000);
			}else{
				console.info(d);
			}
		})
	}
	pull();
}