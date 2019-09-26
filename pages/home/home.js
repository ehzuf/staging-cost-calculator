Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  data: {
    output: 0,
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var X = e.detail.value.original_price == '' ? 9999.0 : e.detail.value.original_price
    var N = e.detail.value.number_of_months == '' ? 24 : e.detail.value.number_of_months
    var annual_rate = e.detail.value.annual_rate == '' ? 0.05 : e.detail.value.annual_rate
    var r = 1.0 + annual_rate / 12.0

    var result = X / N * (1.0 - Math.pow((1.0 / r), N)) / (1.0 - 1.0 / r)

    console.log('X: ', X)
    console.log('N：', N)
    console.log('r：', r)
    console.log('result：', result)

    this.setData({
      output: result.toFixed(2)
    })
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})