var app = getApp();
Page({
  data: {
    evaContent: '',
    noteMaxLen: 200,
    disabled: false,
    len: 0,
    inputValue: '',
  },
  onLoad: function () {
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
  //字数限制  
  bindWordLimit: function (e) {
    this.data.inputValue = e.detail.value;
    this.data.len = parseInt(this.data.inputValue.length);
    if (this.data.len > this.data.noteMaxLen) return;
    this.setData({
      currentNoteLen: this.data.len //当前字数    
    });
  },
  modalcnt: function () {
    wx.showModal({
      title: '提示',
      content: '输入信息不可为空',
      success: function (res) {
        if (res.confirm) {
          return
        } else if (res.cancel) {
          return
        }
      }
    })
  },
  //提交事件
  suggSubmit: function (e) {
    if (this.data.len <= 0) {
      this.modalcnt();
    } else {
      this.submitSucc();
    }

  },
  submitSucc: function () {
    wx.showToast({
      title: '反馈成功',
      icon: 'success',
      duration: 1200
    })
    setTimeout(function () {
      wx.switchTab({
        url: '../myInfo/myInfo'
      })
    },1200)
  },
  evaSubmit: function (e) {

  }
  //   var that = this;
  //   //提交(自定义的get方法)
  //   app.func.req('http://localhost:1111/ffeva/complaint?content=''+this.data.evaContent),get,function(res){
  //     console.log(res);
  //   if (res.result === '1') {
  //     //跳转到首页
  //     app.func.showToast('提交成功', 'loading', 1200);
  //   } else {
  //     app.func.showToast('提交失败', 'loading', 1200);
  //   }
  // });
})