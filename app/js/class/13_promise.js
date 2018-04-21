// promise:异步编程的解决方案
// 什么是异步：函数A执行完再执行B，这个步骤可以通过回调，事件触发来，promise区别于以上两种方式
// promise作用：解决异步操作 
{
	// es5回调实现异步
	let ajax=function(callback){
		console.log('执行')
		//定时器
		setTimeout(function() {
			callback&&callback.call();
			// 判断回调是否已经执行，已执行则到下一步
		}, 1000);
	};
	ajax(function(){
		console.log('timeout1');
	})
}
{
	let ajax=function(){
		console.log('执行2');
		//ajax执行完后，不再是执行回调了，而是返回一个对象。
		// 这个对象就是promise实例，里面有then方法就是下一步执行的内容
		return new Promise(function(resolve,reject){
			// resolve 表示要用执行的写一步操作	
			// reject 中断当前的操作
			setTimeout(function() {
				resolve()
			}, 1000);
		})
	};
	// then后面的function对应的是resolve
	ajax().then(function(){
		console.log('promise','timeout2');
	})
}
{
	//用promise A完了B，B完了C。。。
	let ajax=function(){
		console.log('执行3');
		//ajax执行完后，不再是执行回调了，而是返回一个对象。
		// 这个对象就是promise实例，里面有then方法就是下一步执行的内容
		return new Promise(function(resolve,reject){
			// resolve 表示要用执行的写一步操作	
			// reject 中断当前的操作
			setTimeout(function() {
				resolve()
			}, 1000);
		})
	};
	ajax()
		.then(function(){
			//返回一个promise实例
			return new Promise(function(resolve,reject){
				setTimeout(function() {
					resolve();
				}, 2000);
			});
		})
		.then(function(){
			console.log('timeout3');
		})
}
{
	// 串行过程，若中间某部出错，怎么捕获错误catch
	let ajax=function(num){
		console.log('执行4');
		return new Promise(function(resolve,reject){
			//判断num参数是不是大于5
			if(num>5){
				resolve()
			}else{
				throw new Error('出错了')
			}
		})

	}
	ajax(3).then(function(){
		console.log('log',6);
	}).catch(function(err){
		console.log('catch',err)
	});
}
{
	// promise.all()
	// 所有图片加载完再添加到页面

	// 加载图片
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img=document.createElement('img');
			img.src=src;
			// img.onload表示图片加载完成
			img.onload=function(){
				resolve();
			}
			img.onerror=function(err){
				reject(err);
			}
		})
	}
	// 添加到页面上
	function showImgs(imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
	}
	// Promise.all表示吧多个promise实例当做一个promise实例
	Promise.all([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png'),
	]).then(showImgs)

}
{
	// promise.race() 三张图片位于不同的位置，加载出一个就行
	// 加载图片
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img=document.createElement('img');
			img.src=src;
			// img.onload表示图片加载完成
			img.onload=function(){
				resolve(img);
			}
			img.onerror=function(err){
				reject(err);
			}
		})
	}
	function showImgs(img){
		let p=document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}
	
	Promise.race([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png'),
	]).then(showImgs)
}