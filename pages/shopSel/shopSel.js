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
      '北京', '上海'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,  
    // message: 'Hello MINA!'
  },
  onLoad: function () {
    console.log('onLoad test');
  },
  goShop: function (e) {
    var shopId = e.currentTarget.dataset.shopid;
    console.log(shopId);
    }   
})  