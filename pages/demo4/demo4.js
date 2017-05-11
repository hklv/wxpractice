var app = getApp();

Page({
	data:{
		msg:"test",
		name:app.globalData.name,
		condition:90,
		list:[
		{name:'闵洁',tel:'15850670447'},
		{name:'吕慧康',tel:'18512598361'}
		],
		image:[{name:'恩爱',src:'/images/lhk_mj.jpg'}],
		flag:false,
		item:{
           name:'闵洁',
           tel:'15850670447'
		}
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