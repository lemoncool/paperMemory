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
      { title: '打印2', type: 'B5', colorType: '黑白单面', count: 3, pages: 10, total: 30 },
    ],
    money: 500,
    infoAreaShow: 0,
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
  // 叉号
  clearInfo: function (e) { 
    var infoId = e.currentTarget.dataset.infoid;
    console.log('infoId',infoId);
    this.setData({
      infoAreaShow:infoId
    })
  },

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

})

