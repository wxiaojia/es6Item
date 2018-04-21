//proxy reflect对象的方法是一模一样的
{
	let obj={
		time:'2017-4-19',
		name:'net',
		_r:123
	};
	let monitor=new Proxy(obj,{
		//拦截对象属性的读取
		get(target,key){
			return target[key].replace('2017','2018')
		},
		//拦截对象设置属性
		set(target,key,value){
			//只允许修改name
			if(key==='name'){
				return target[key]=value;
			}else{
				return target[key];
			}
		},
		// 拦截key in object,即判断当前对象是否拥有这个属性
		has(target,key){
			if(key==='name'){
				return target[key]
			}else{
				return false;
			}
		},
		//拦截删除
		deleteProperty(target,key){
			//若是下划线开头则删除
			if(key.indexOf('_')>-1){
				delete target[key];
				return true;
			}else{
				return target[key];
			}
		},
		// 拦截Oject.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
		ownKey(target,key){
			return Object.keys(target).filter(item=>item!='time')
		}
	});

	//用户直接操作monitor
	console.log('get',monitor.time)
	monitor.time='2018'
	monitor.name='mukewang'
	console.log('set',monitor.time,monitor)
	console.log('has','name' in monitor,'time' in monitor);
	// delete monitor.time;
	// console.log('delete',monitor);
	// delete monitor._r;
	// console.log('delete',monitor);
	console.log('ownKeys',Object.keys(monitor))
}
{
	let obj={
		time:'2017-4-19',
		name:'net',
		_r:123
	};
	// proxy对象有的方法，reflect就有，而且不用new
	console.log('Reflect',Reflect.get(obj,'time'));
	Reflect.set(obj,'name','mukewang');
	console.log(obj);
	console.log('has',Reflect.has(obj,'name' ));
}
//怎么用
{
	//校验（手机号格式等)，用proxy和reflect对业务解耦模块
	function validator(target,validator){
		//validator配置选项，返回proxy对象
		return new Proxy(target,{
			_validator:validator,//保存配置选项
			set(target,key,value,proxy){	//代理控制
				// 判断当前对象有没有key值，没有说明不能对他赋值
				if(target.hasOwnProperty(key)){
					let va=this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy);
					}else{
						throw Error(`不能设置${key}到${value}`)
					}
				}else{
					//抛出异常
					throw Error(`${key} 不存在` )
				}
			}
		})
	}
	//设置过滤选项即校验条件
	const personValidators={
		//判断数据类型是不是字符串，是则允许代理修改
		name(val){
			return typeof val==='string'
		},
		age(val){
			return typeof val==='number'&&val>18
		},
		mobile(val){

		}
	}
	// 添加mobile只需要在personValidators和person中添加
	class Person{
		constructor(name,age){
			this.name=name;
			this.age=age;
			this.mobile='1111';
			//这个构造函数返回的是proxy对象
			return validator(this,personValidators)
		}
	}
	const person=new Person('lilei',30);
	console.info(person);
	// person.name=48;//浏览器会报错：不能设置name到48`
	person.name='han mei mei'
	console.info(person);


}
