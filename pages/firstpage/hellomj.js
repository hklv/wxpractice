var helloData = {
    name:'你是闵洁吗？'
}

Page({
    data:helloData,
    changeNameYes:function(e){
        this.setData({
            name:'你怎么这么美丽可爱呢，我好爱你哦，宝宝'
        })
    },
    changeNameNo:function(e){
        this.setData({
            name:'那你知道我的宝在哪吗?'
        })
    },
    clickImage:function(e){
        
    }
})