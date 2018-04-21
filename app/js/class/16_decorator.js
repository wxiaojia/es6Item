// 修饰器：是一个函数用来修改（类的）行为。（函数，修改类的行为），或者说扩展类的功能，只在这个类的范畴里有用
{
	//限制某个属性是只读的,target类的对象,name类的属性名称，descriptor该属性的描述对象
	// 修饰器的函数
	let readonly=function(target,name,descriptor){
		descriptor.writable=false;
		return descriptor;
	};
	class Test{
		@readonly
		time(){
			return '2017-03-11'
		}
	}
	let test=new Test();
	// test.time=function(){  	//会报错
	// 	console.log('reset time');
	// }
	console.log(test.time());
}
{
	//增加静态属性，要加载class前面
	let typename=function(target,name,descriptor){
		target.myname='hello';
	}
	@typename
	class Test{

	}
	console.log('类修饰器',Test.myname);
	//第三方库修饰器的js库：code-decorators:npm install core-decorator，不需要我们去写函数
}
{
	//日志系统，如广告：日志统计：点击 展示 (埋点)
	//type：如点击或者展示
	let log=(type)=>{
		return function(target,name,descriptor){
			let src_method=descriptor.value;
			descriptor.value=(...arg)=>{
				src_method.apply(target,arg);
				//埋点
				console.info(`log ${type}`);
			}
		}
	}
	class AD{
		@log('show')
		show(){
			//业务逻辑
			console.info(`ad is show`)
			//埋点是后执行的
		}
		@log('click')
		click(){
			console.info(`ad is click`)
		}
	}
	let ad=new AD();
	ad.show();
	ad.click();

	// 埋点系统抽离出来形成可服用的模块，接口变了，只需要该log就行了
}