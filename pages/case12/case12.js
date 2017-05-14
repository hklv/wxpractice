Page({
	data:{
		markers: [{
      iconPath: "/images/5.jpeg",
      id: 1000,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 20,
      height: 20
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/5.jpeg',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
	},
	markertap(e) {
    console.log(e.markerId);
    wx.showToast({
    	title:'你想去哪？',
    	icon:'success',
    	duration:2000
    })
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