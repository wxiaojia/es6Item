//接口模块：比如遗漏是服务端提供的或者自己计算的，交给前端
//jquery 简单易用，封装了很多事件绑定和ajax请求
import $ from "jquery";

class Interface{
	/**
	 * [getOmit 获取遗漏的数据]
	 * @param {string} issue [当前期号]
	*/
	getOmit(issue){
		// 获取当前对象复制一个变量
		let self=this;
		//方便异步操作
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/omit',	//指向接口的地址
				data:{
					isssue:issue
				},
				dataType:'json',
				success:function(res){
					// 当前的数据保存到当前的对象
					self.setOmit(res.data);//setOmit其他类中的一个方法
					resolve.call(self,res);
				},
				error:function(err){
					reject.call(err);
				}
			})
		});
	}
	/**
	 * [getOpenCode 获取开奖号码的接口]
	 * @param {string} issue [期号]
	*/
	getOpenCode(issue){
		let self=this;
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/opencode',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					self.setOpenCode(res.data);
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			})
		})
	}
	/**
	 * [getState 获取当前状态的接口]
	 * @param {string} issue [期号]
	*/
	getState(issue){
		let self=this;
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/state',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			})
		});
	}
}

export default Interface

