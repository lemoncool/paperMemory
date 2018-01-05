//order.js
Page({
  data: {
    sexType: [
      { name: 'male', value: '先生' },
      { name: 'female', value: '女士', checked: 'true' }
    ],
    disabled: false,
  },
  // 性别单选按钮
  sexChangee: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  backMyAddr: function () {
    wx.navigateTo({
      url: '../myAddr/myAddr'
    })
  },
  getLocation: function () {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.request({
          url: 'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&coordtype=gcj02ll&location=' + latitude + ',' + longitude + '&output=json&pois=0',
          method: "get",
          success: function (res) {
            console.log(res.data.result.formatted_address)
            wx.setStorageSync('location', res.data.result.formatted_address.substr(res.data.result.formatted_address.indexOf('市') + 1, 10))
          }
        })
      }
    })
    // wx.switchTab({
    //   url: '/pages/home/home'
    // })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})

