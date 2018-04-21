//set中的值是不能重复的
//map 是key,value值,此处的key可以是任意的数据类型
{
	//普通定义方法
	let list=new Set();
	list.add(5);
	list.add(7);
	console.log('size',list.size);//set中的长度

	//另一种初始化方式
	let arr=[1,2,3,4];
	let list1=new Set(arr);
	console.log('size',list1.size);//set中的长度
}
{
	//唯一的
	let list=new Set();
	list.add(5);
	list.add(7);
	list.add(7);
	console.log(list);//不会报错，但是不生效，可以去重

	let arr=[1,2,1,2,3,4];
	let list1=new Set(arr);
	console.log(list1);

	let arr2=[1,2,1,'2',3,4];//不同数据类型的可以保留
	let list2=new Set(arr2);
	console.log(list2);
}
{
	//有添加则会有移除,清空，判断等
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);
	console.log('has',list.has('add'));
	console.log('delete',list.delete('add'),list);
	list.clear();
	console.log('list',list);
}
{
	//set实例的遍历
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);
	for(let key of list.keys()){
		console.log('keys',key);
	}
	for(let value of list.values()){
		console.log('value',value);
	}
	for(let value of list){
		console.log('value',value);
	}
	for(let [key,value] of list.entries()){
		console.log('key value',key,value);
	}
	list.forEach(function(item){
		console.log(item);
	})
}
{
	//支持的数据类型不一样，weakset元素只能是对象，对象是弱引用。不会检测对象会不会在其他地方用过
	//没有clear方法，没有set属性，不能遍历
	let set = new WeakSet();
	let arg={};
	set.add(arg);
	// set.add(3)会报错
	console.log(set);
}
{
	//map第一种定义
	let map = new Map();
	let arr=['123'];
	// set添加是add,map是用set
	map.set(arr,456);
	console.log('map',map,map.get(arr));
}
{
	// 第二种定义，接受数组，数组的每一个元素还是数组
	let map=new Map([['a',123],['b',456]]);
	console.log('map args',map)
}
{
	//常用的属性值和方法
	let map=new Map([['a',123],['b',456]]);
	console.log('map args',map)
	console.log('size',map.size);
	console.log('delete',map.delete('a'),map);
	map.clear();
	console.log('clear',map);
	//map的遍历value,entries,foreach和set是一样的
}
{
	//weakMap与weakSet是一样的
	let map = new WeakMap();
	let o={};
	map.set(o,123);
	console.log(map)
}
//map与array对比
//set与array对比
{
	let map = new Map();
	let array=[];
	//增
	map.set('t',1);
	array.push({t:1});
	console.info('map-array',map,array);
	//查
	let map_exist=map.has('t');
	let array_exist=array.find(item=>item.t);
	console.info('map-array',map_exist,array_exist);
	//改
	map.set('t',2);
	array.forEach(item=>item.t?item.t=2:'');
	console.info('map-array-modify',map,array);
	//删除
	map.delete('t');
	let index=array.findIndex(item=>item.t);
	array.splice(index,1);
	console.info('map-array-delete',map,array);
}
{
	let set = new Set();
	let arr=[];
	//增
	set.add({t:1});
	arr.push({t:1});
	console.info('set-arr',set,arr);
	//查
	let set_exist=set.has('t');
	let array_exist=arr.find(item=>item.t);
	console.info('set-array',set_exist,array_exist);
	//改
	set.forEach(item=>item.t?item.t=2:'');
	arr.forEach(item=>item.t?item.t=2:'');
	console.info('set-arr-modify',set,arr);
	//删除
	set.forEach(item=>item.t?set.delete(item):'');
	let index=arr.findIndex(item=>item.t);
	arr.splice(index,1);
	console.info('set-arr-delete',set,arr);
}
//map与object对比
//set与object对比
{
	let item={t:1};
	let map = new Map();
	let set = new Set();
	let obj = {}
	//增
	map.set('t',1);
	set.add(item);
	obj['t']=1;
	console.info('map-set-obj',map,set,obj);
	//查
	console.info({
		map_exist:map.has('t'),
		set_exist:set.has(item),
		obj_exist:'t' in obj
	});	
	//改
	map.set('t',2);
	set.t=2;
	obj['t']=2;
	console.info('map-set-obj',map,set,obj);
	//删除
	set.delete(item);
	map.delete('t');
	delete obj['t'];
	console.info('map-set-obj',map,set,obj);
//能使用map就不要使用数组，如果对数据要求唯一性，考虑用set，放弃使用object做存储
}