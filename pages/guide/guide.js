// pages/guide/guide.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: '',
    windowHeight: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowWidth: app.globalData.windowWidth,
      windowHeight: app.globalData.windowHeight
    })
  },
})