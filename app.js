//app.js
App({
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        var code = res.code;
        console.log('code', code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.getUserInfo({
          success: function (res) {
            //平台登录
            console.log('res', res)

          },
          fail: function (res) {
            wx.showModal({
              title: '警告',
              content: '您点击了拒绝授权，将无法正常使用纸张记忆的功能体验；点击重新授权，则可正常使用；否则请删除小程序重新进入',
              // content: '必须授权登陆之后才能操作呢，是否重新授权登陆？',
              showCancel:true,
              cancelText:'不授权',
              cancelColor:'#333',
              confirmText:'重新授权',
              confirmColor:'#4EDF80',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定');
                  wx.openSetting({
                    success: function (res) {
                      console.log('确认重新授权');
                      //尝试再次登录
                      wx.login();
                    }
                  })
                }
              }
            })

          }
        })
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => { 
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           console.log('this.globalData.userInfo', this.globalData.userInfo);
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    wx.getSetting({
      success: res => {
        console.log('进入getsetting');
        console.log(res.authSetting['scope.userInfo']);
        console.log(!res.authSetting['scope.userInfo']);
        if (!res.authSetting['scope.userInfo']) {
          console.log('未授权');
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              console.log('同意');
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              // wx.startRecord()
            }
          })
        }
        console.log('走入已经授权');
        if (res.authSetting['scope.userInfo']) {
          console.log('已经授权');
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log('this.globalData.userInfo', this.globalData.userInfo);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})