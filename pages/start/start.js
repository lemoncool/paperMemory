//test.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    userInfo: {},
    message: 'Hello MINA!'
  },
  onLoad: function () {
    console.log('onLoad test');
  },
  tapName: function (event) {
    console.log(event)
  }
})  