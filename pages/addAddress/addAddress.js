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
  jumpToPay: function () {
    wx.navigateTo({
      url: '../pay/pay'
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

