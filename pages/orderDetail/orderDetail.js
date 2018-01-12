//test.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    infoArea: [
      { title: '打印1.doc', type: 'A4', colorType: '彩色双面', count: 2, pages: 20, extra: '尽快送达' },
      // { title: '打印2.doc', type: 'B5', colorType: '黑白单面', count: 3, pages: 10, extra: '横边装订' }
    ],
  },
  onLoad: function () {
    console.log('onLoad test');
  },
  // goShop: function (e) {
  //   var shopId = e.currentTarget.dataset.shopid;
  //   console.log(shopId);
  //   wx.navigateTo({
  //     url: '../ordersubmit/ordersubmit'
  //   })
  // },
  // markertap: function () {
  //   wx.getLocation({
  //     type: 'wgs84',
  //     success: (res) => {
  //       var latitude = res.latitude // 经度
  //       var longitude = res.longitude // 纬度
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面显示
   **/
  // getData: function () {
  //   var that = this;
  //   wx.request({
  //     url: "https://www.easy-mock.com/mock/596257bc9adc231f357c4664/restaurant/info",//接口链接
  //     method: "GET",
  //     success: function (res) {//成功得到数据，对数据进行处理
  //       that.setData({//将数据发送到data中
  //         restaurant: res.data.data.restaurant,
  //         location: wx.getStorageSync('location')
  //       })
  //     }
  //   });
  // }
})  