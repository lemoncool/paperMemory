//test.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    orderItem: [
      { title: '打印1.doc', type: 'A4', colorType: '彩色双面', count: 2, pages: 20, money: 11 },
      { title: '打印1.doc', type: 'A4', colorType: '彩色双面', count: 2, pages: 20, money: 50 },
    ],
    shopName: '',
    deliverFee: 12,
    deliverAddr: '朝阳区朝阳区',
    totalFee: 62,
    orderCode: 123456778,
    extra: '尽快送达',
    shopAddr: '创业孵化中心',
    deliverByselfCode: '120236548795',
  },
  onLoad: function (options) {
    var that = this;
    // 自取时取出缓存中商铺id判断自取点的文本
    wx.getStorage({
      key: 'shopIndex',
      success: function (res) {
        if (res.data == '0') {
          that.setData({
            shopName: '农大店'
          })
        } else if (res.data == '1') {
          that.setData({
            shopName: '师院店'
          })
        }
      }
    });
    // 取出店铺地址
    // wx.getStorage({
    //   key: 'shopAddr',
    //   success: function (res) {
    //     console.log('shopAddr', res.data)
    //   }
    // })

  },
  contactShop: function () {
    wx.makePhoneCall({
      phoneNumber: '1340000' //假数据 后期需要真实联系方式
    })
  },
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