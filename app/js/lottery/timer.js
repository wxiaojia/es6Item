//定时器:类，字符串模板，const,let
// 购彩剩余时间
class Timer{
	// end截止时间,unpdate时间更新的回调,handle结束后的回调
	countdown(end,unpdate,handle){
		const now=new Date().getTime();
		const self=this;
		if(now-end){
			//倒计时已经结束了,回调
			handle.call(self);
		}else{
			let last_time=end-now;
			const px_d=1000*60*60*60*24;//常量，一天的毫秒
			const px_h=1000*60*60;
			const px_m=1000*60;
			const px_s=1000;
			//剩余多少天
			let d=Math.floor(last_time/px_d);
			let h=Math.floor((last_time-last_time/px_d)/px_h);
			let m=Math.floor((last_time-last_time/px_d-h*px_h)/px_m);
			let s=Math.floor((last_time-last_time/px_d-h*px_h-m*px_m)/px_s);
			let r=[];
			if(d>0){
				r.push(`<em>${d}</em>天`);
			}
			//如果没有天,不能出现0小时多少天多少秒
			if(r.length||(h>0)){
				r.push(`<em>${h}</em>小时`);
			}
			if(r.length||(m>0)){
				r.push(`<em>${m}</em>小时`);
			}
			if(r.length||(s>0)){
				r.push(`<em>${s}</em>小时`);
			}
			//吧值保存到对象的属性
			self.last_time=r.join('');
			update.call(self,r.join(''));
			// 轮询
			setTimeout(function() {
				self.countdown(end,unpdate,handle);
			}, 1000);
		}
	}
}
export default Timer