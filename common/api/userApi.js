//接口(API)调用的方法
import { request } from '../http/request.js'

class userApi extends request {
  //例子
  // showVipContentDetail(data,handle) {
  //   this.Post('customerVipServer/showVipContentDetail', data).then(res => { handle(res) }).catch(err => { handle(err) })
  // }
}
export {
  userApi
}