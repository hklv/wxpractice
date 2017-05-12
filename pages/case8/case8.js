Page({
	data:{
		title:'',
		icons:[
		{
			type:'success',size:25
		},
        {
			type:'success_no_circle',size:25
		},
		{
			type:'info',size:45
		},
		{
			type:'warn',size:25
		},
		{
			type:'waiting',size:25
		},
		{
			type:'cancel',size:25
		},
		{
			type:'download',size:25
		},
		{
			type:'search',size:25
		},
		{
			type:'clear',size:25
		},
		]
	},
	onLoad:function(options){
		console.log(options);
		this.setData({
			title:options.title
		});
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