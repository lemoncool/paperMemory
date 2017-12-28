//order.js
Page({
  data: {
    isDeliver: false,  //需要配送
    deliverType: [
      { name: 'notDeliver', value: '到店自取', checked: 'true' },
      { name: 'deliver', value: '送货上门' }
    ],
    primarySize: 'default',
    disabled: false,
    money: 500
  },
  // 配送方式选择
  deliverChange: function (e) {
    // console.log('传过来的value值为：', e.detail.value)
    if (e.detail.value == 'notDeliver') {   //自取
      this.setData({
        isDeliver : false
      })
    } else {
      this.setData({
        isDeliver: true
      })
    }
  },

})

