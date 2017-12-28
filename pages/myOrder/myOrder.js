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
  goOrderDetail: function (e) {
    // var shopId = e.currentTarget.dataset.shopid;
    // console.log(shopId);
    wx.navigateTo({
      url: '../orderDetail/orderDetail'
    })
  }
})  