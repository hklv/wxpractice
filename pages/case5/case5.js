Page({
	data:{
		selyear:'2014',
		selsea:'春',
		seladd:'南京',
		value:[0,0,0],
		years:['2014','2015','2016'],
		seasons:['春','夏','秋','冬'],
		addresses:['南京','苏州','镇江','无锡']
	},
	change:function(e){
         var val = e.detail.value;
         this.setData({
         	selyear:this.data.years[val[0]],
         	selsea:this.data.seasons[[val[1]]],
         	seladd:this.data.addresses[[val[2]]]
         });
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