// iterator:操作某些数据结构，读取，相同办法的接口读取不同的数据结构
// for...of：不断调用iterator接口，不同数据结构读取
{
	let arr=['hello','world'];
	let map=arr[Symbol.iterator]();
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
}
{
	// 可以自定义iterator接口
	// object中没有内置iterator接口
	let obj={
		start:[1,3,2],
		end:[7,9,8],
		//先遍历start在遍历end
		[Symbol.iterator](){
			let self=this;
			let index=0;
			let arr=self.start.concat(self.end);
			let len=arr.length;
			return {
				next(){
					//遍历的过程
					if(index<len){
						return {
							value:arr[index++],
							done:false
						}
					}else{
						return {
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}
	for(let key of obj){
		console.log(key);
	}
}
{
	let arr=['hello','world'];
	for(let value of arr){
		console.log(value	)
	}	
}