//order.js
Page({
  data: {
    selectArea: true,
    defaultType: 'A4',
    papeTypeList: ['A4','B4','A3'],
    colorType: [
      { name: 'pure', value: '黑白' },
      { name: 'colorful', value: '彩色', checked: 'true' }
    ],
    sideType:[
      { name: 'single', value: '单面打印' },
      { name: 'double', value: '双面打印', checked: 'true' }
    ],
    primarySize: 'default',
    disabled: false,
    money:500
  },
  // 黑白彩色单选按钮
  colorChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  // 单双面单选
  sideChange: function (e) {
    console.log('单双面发生change事件，携带value值为：', e.detail.value)
  },
  //点击选择类型
  clickPaperType: function () {
    var selectArea = this.data.selectArea;
    if (selectArea) {
      this.setData({
        selectArea: false,
      })
    } else {
      this.setData({
        selectArea: true,
      })
    }
  },
  //点击切换
  mySelect: function (e) {
    this.setData({
      defaultType: e.target.dataset.me,
      selectArea: true,
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

