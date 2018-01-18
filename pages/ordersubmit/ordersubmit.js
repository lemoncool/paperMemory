//order.js
Page({
  data: {
    selectArea: true,
    defaultType: 'A4',
    papeTypeList: ['A4', 'B4', 'A3'],
    colorType: [
      { name: 'pure', value: '黑白' },
      { name: 'colorful', value: '彩色', checked: 'true' }
    ],
    sideType: [
      { name: 'single', value: '单面打印' },
      { name: 'double', value: '双面打印', checked: 'true' }
    ],
    primarySize: 'default',
    disabled: false,
    money: 500,
    src: "../../images/header.jpg",  //绑定image组件的src
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
  },
  // 调用传图片接口
  uploadImage: function () {
    console.log('进入了选择图片方法');
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log('开始upload方法');
        upload(that, tempFilePaths);
        console.log('结束upload方法');
      }
    })
  },
  // 上传
  upload: function (page, path) {
    wx.showToast({
      icon: "loading",
      title: "正在上传"
    }),
      wx.uploadFile({
        url: constant.SERVER_URL + "/FileUploadServlet",
        filePath: path[0],
        name: 'file',
        header: { "Content-Type": "multipart/form-data" },
        success: function (res) {
          console.log(res);
          if (res.statusCode != 200) {
            wx.showModal({
              title: '提示',
              content: '上传失败',
              showCancel: false
            })
            return;
          }
          var data = res.data
          page.setData({  //上传成功修改显示头像
            src: path[0]
          })
        },
        fail: function (e) {
          console.log(e);
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
        },
      })
  }
})