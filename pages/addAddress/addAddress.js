//order.js
Page({
  data: {
    sexType: [
      { name: 'male', value: '先生' },
      { name: 'female', value: '女士', checked: 'true' }
    ],
    disabled: false,
    location: {},
    imgHide: false,
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
  // mapViewTap: function () {
  //   wx.getLocation({
  //     type: 'gcj02', //返回可以用于wx.openLocation的经纬
  //     success: function (res) {
  //       console.log(res)
  //       wx.openLocation({
  //         latitude: res.latitude,
  //         longitude: res.longitude,
  //         scale: 28
  //       })
  //     }
  //   })
  // },
  getLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
            name: res.name.substr(0, 8) + "..."
          }
        });
        if (that.data.location.name) {
          that.setData({
            imgHide:true
          })
        }  
      }
    })
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

