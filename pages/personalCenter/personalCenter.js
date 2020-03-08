// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    listHeight: 300,
    tabIndex: 0,
		studentList: [
			{
        usercover: 'https://img2.woyaogexing.com/2020/03/06/f4a58ae6ce254fdeb9aef09c1e06eae8!400x400.jpeg',
				username: '张小白',
				nickname: 'zhang-xiao-bai',
				date: '2020-03-10',
				profession: '高铁乘务员'
			},
			{
        usercover: 'https://img2.woyaogexing.com/2020/03/06/7586c27ac6cd4a2d8d510f60207f7bdc!400x400.jpeg',
				username: '张小红',
				nickname: 'zhang-xiao-hong',
				date: '2020-01-01',
				profession: '汽车维修'
			},
			{
        usercover: 'https://img2.woyaogexing.com/2020/03/06/93795024ef4646b9aafe3d2385fa4603!400x400.jpeg',
				username: '张小黑',
				nickname: 'zhang-xiao-hei',
				date: '2019-08-23',
				profession: '农林牧'
			},
			{
        usercover: 'https://img2.woyaogexing.com/2020/03/06/168948e6d03a4983b4d387b15525ddf0!400x400.jpeg',
				username: '张小绿',
				nickname: 'zhang-xiao-lv',
				date: '2019-06-15',
				profession: '国际政治'
			},
			{
        usercover: 'https://img2.woyaogexing.com/2020/03/06/c6d734436afe41b5bb32ffc6afa69c93!400x400.jpeg',
				username: '张小黄',
				nickname: 'zhang-xiao-huang',
				date: '2018-12-07',
				profession: '水电焊'
      },
      {
        usercover: 'https://img2.woyaogexing.com/2020/03/06/4d249e2c8d2f451ba7881156c6835724!400x400.jpeg',
        username: '张小黄',
        nickname: 'zhang-xiao-huang',
        date: '2018-12-07',
        profession: '水电焊'
      },
      {
        usercover: 'https://img2.woyaogexing.com/2020/03/06/fc4ad31d9f6b40aba73753be8365d62d!400x400.jpeg',
        username: '张小黄',
        nickname: 'zhang-xiao-huang',
        date: '2018-12-07',
        profession: '水电焊'
      },
      {
        usercover: 'https://img2.woyaogexing.com/2020/03/06/2ac33e85841a471497713542ef94bbbc!400x400.jpeg',
        username: '张小黄',
        nickname: 'zhang-xiao-huang',
        date: '2018-12-07',
        profession: '水电焊'
      },
      {
        usercover: 'https://img2.woyaogexing.com/2020/03/06/59c9629e00ca454ca4050935b774d0f7!400x400.jpeg',
        username: '张小黄',
        nickname: 'zhang-xiao-huang',
        date: '2018-12-07',
        profession: '水电焊'
      },
      {
        usercover: 'https://img2.woyaogexing.com/2020/03/06/43a294c146244f2e89e7fe347914af2c!400x400.jpeg',
        username: '张小黄',
        nickname: 'zhang-xiao-huang',
        date: '2018-12-07',
        profession: '水电焊'
      },
      {
        usercover: 'https://img2.woyaogexing.com/2020/03/06/d2906ee8c7d44f278169584c4bbfee50!400x400.jpeg',
        username: '张小黄',
        nickname: 'zhang-xiao-huang',
        date: '2018-12-07',
        profession: '水电焊'
      },
      {
        usercover: 'https://img2.woyaogexing.com/2020/03/06/bec544183527408a838e20a1bd4fe6c7!400x400.jpeg',
        username: '张小黄',
        nickname: 'zhang-xiao-huang',
        date: '2018-12-07',
        profession: '水电焊'
      }
		]
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {

        console.log(res.windowHeight)
        this.setData({
          listHeight: res.windowHeight - (311 / 750 * res.windowWidth)
        })
      }
    })
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},
  tabClick(e) {
    this.setData({
      tabIndex: parseInt(e.currentTarget.dataset.index)
    })
  },
  swiperChange(e) {
    this.setData({
      tabIndex: e.detail.current
    })
  },
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})