//获取应用实例
const app = getApp()

Page({
  data: {
    icon: '../../resource/images/credit-level.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    lists:[{
      icon:"../../resource/images/Smile.png",
      text:"个人信息",
      url:"../information/information"
    },{
      icon: "../../resource/images/skip.png",
      text: "分享二维码",
      url: "../logs/logs"
    },{
      icon: "../../resource/images/all.png",
      text: "精品推荐",
      url: "../logs/logs"
    },{
      icon: "../../resource/images/service.png",
      text: "联系客服",
      url: "../logs/logs"
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
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
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
