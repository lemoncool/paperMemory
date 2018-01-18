//test.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    userInfo: {},
  },
  onLoad: function () {
    // console.log('app.globalData.userInfo', app.globalData.userInfo);
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })
  },
  goTel: function () {
    wx.makePhoneCall({
      phoneNumber: '1340000' //假数据 后期需要真实联系方式
    })
  },
  goSuggestion: function () {
    wx.navigateTo({
      url: '../suggestion/suggestion'
    })
  },
  goAddress: function () {
    wx.navigateTo({
      url: '../myAddr/myAddr'
    })
  },
})  