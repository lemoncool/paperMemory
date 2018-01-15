//order.js
Page({
  data: {
    isDeliver: false,  //需要配送
    deliverType: [
      { name: 'notDeliver', value: '到店自取', checked: 'true' },
      { name: 'deliver', value: '送货上门' }
    ],
    infoArea: [
      { title: '打印1', type: 'A4', colorType: '彩色双面', count: 2, pages: 20, total: 40 },
      { title: '打印2', type: 'B5', colorType: '黑白单面', count: 3, pages: 10, total: 30 }
    ],
    money: 0,
    shopAddr: "",
  },
  // 配送方式选择
  deliverChange: function (e) {
    // console.log('传过来的value值为：', e.detail.value)
    if (e.detail.value == 'notDeliver') {   //自取
      this.setData({
        isDeliver: false
      })
    } else {
      this.setData({
        isDeliver: true
      })
    }
  },
  // 叉号删除
  deleteInfo: function (e) {
    var infoId = e.currentTarget.dataset.infoid;
    // console.log('infoId', infoId);
    this.data.infoArea.splice(infoId, 1);
    this.setData({
      infoArea: this.data.infoArea
    })
    this.totalMoney()
  },
  // 时间控件
  bindTimeChange: function (e) {
    var method = e.currentTarget.dataset.method;
    console.log('传过来的参数为', method);
    switch (method) {
      case '1':
        this.setData({
          time1: e.detail.value
        })
        console.log('自取方式携带时间值为', e.detail.value)
        break;
      case '2':
        this.setData({
          time2: e.detail.value
        })
        console.log('配送方式携带时间值为', e.detail.value)
        break;
    }
  },
  totalMoney: function () {
    this.data.money = 0;
    var infoList = this.data.infoArea;
    for (var i = 0; i < infoList.length; i++) {
      // console.log(i, infoList[i].total);
      this.setData({
        money: this.data.money + infoList[i].total
      })
      // console.log(this.data.money);
    }
  },
  onLoad: function (options) {
    var that = this;
    // 自取时取出缓存中商铺id判断自取点的文本
    wx.getStorage({
      key: 'shopIndex',
      success: function (res) {
        if (res.data == '0') {
          that.setData({
            shopAddr: '农大创业孵化基地'
          })
          // 将店铺地址存入缓存，以便订单信息中读取
          wx.setStorage({
            key: "shopAddr",
            data: that.data.shopAddr
          })
        } else if (res.data == '1') {
          that.setData({
            shopAddr: '师院创业孵化基地'
          })
          // 将店铺地址存入缓存，以便订单信息中读取
          wx.setStorage({
            key: "shopAddr",
            data: that.data.shopAddr
          })
        }
      }
    })
    // 重新计算总钱数
    this.totalMoney()
  },
  commitPay: function () {
    console.log(1111);
  }
})
