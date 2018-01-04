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
  markertap: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   **/
  getData: function () {
    var that = this;
    wx.request({
      url: "https://www.easy-mock.com/mock/596257bc9adc231f357c4664/restaurant/info",//接口链接
      method: "GET",
      success: function (res) {//成功得到数据，对数据进行处理
        that.setData({//将数据发送到data中
          restaurant: res.data.data.restaurant,
          location: wx.getStorageSync('location')
        })
      }
    });
  }
})  