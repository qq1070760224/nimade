//封装的POST和GET方法
import { config } from '../config/config.js'

const app = getApp()
class request {
  constructor() {
    this.API_URL = config.url;   //调用config的接口
  }
  //封装GET
  Get(url, params) {
    var token = wx.getStorageSync('token') ? wx.getStorageSync('token') : [];
    return new Promise(function (resolve, reject) {
      wx.request({
        url: config.url + url,
        data: params,
        method: 'GET',
        header: {
          'Content-Type': 'application/json',
          'token': wx.getStorageSync('token')
        },
        success: res => {
          resolve(res.data);
        },
        fail: res => {
          wx.hideLoading(2000)
          reject(res.data)
        }
      })
    });
  }
  //封装POST
  Post(url, params) {
    var token = wx.getStorageSync('token') ? wx.getStorageSync('token') : [];
    return new Promise(function (resolve, reject) {
      wx.request({
        url: config.url + url,
        data: params,
        method: 'POST',
        header: {
          // 'content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          'token': wx.getStorageSync('token')
        },
        success: res => {
          resolve(res.data);
        },
        fail: res => {
          reject(res.data)
        }
      })
    });
  }
}
export {
  request
}