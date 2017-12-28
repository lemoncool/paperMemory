//test.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    message: 'Hello MINA!'
  },
  onLoad: function () {
    console.log('onLoad test');
  },
  goShop: function (e) {
    var shopId = e.currentTarget.dataset.shopid;
    console.log(shopId);
    wx.navigateTo({
      url: '../ordersubmit/ordersubmit'
    })
  },
  markertap:function(){
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
      }
    })
  }
})  