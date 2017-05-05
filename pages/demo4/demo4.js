Page({
	data:{
		msg:"test"
	},
	func1:function(e){
		console.log(e.target.dataset.a);
		console.log(e.target.dataset.hi);
		this.setData({
			msg:(new Date-0)
		});
	},
	func2:function(){
		console.log("inner")
	},
	func3:function(){
		console.log("middle")
	},
	func4:function(){
		console.log("outer")
	},
	onLoad:function(options){
		
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		