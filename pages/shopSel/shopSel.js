//test.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    imgUrls: [
      {
        // link: '/pages/index/index',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      },
      {
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }
    ],
    shopAdd: [
      '农大店', '师院店'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // message: 'Hello MINA!'
  },
  onLoad: function () {
    
  },
  goShop: function (e) {
    var shopId = e.currentTarget.dataset.shopid;
    wx.setStorage({
      'shopId111': "shopId"
    })
    // wx.getStorage({
    //   aa: 'shopId',
    //   success: function (res) {
    //     console.log('res.data',res.data)
    //   }
    // })
    console.log(shopId);
    wx.navigateTo({
      url: '../ordersubmit/ordersubmit'
    })
  }
})  