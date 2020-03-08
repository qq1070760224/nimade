// pages/teacherFill/teacherFill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    value9: '',
    value10: '',
    value11: '',
    value12: '',
    value13: '',
    value14: '',
    value15: '',
    teacherFillShow:"步骤1"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点击下一步按钮
  nextStep() {

  },
  //点击跳过
  skip() {
    if(this.data.teacherFillShow == "步骤1") {
      this.setData({
        teacherFillShow: "步骤2"
      })
    }else if (this.data.teacherFillShow == "步骤2") {
      this.setData({
        teacherFillShow: "去首页"
      })
    }
  }
})