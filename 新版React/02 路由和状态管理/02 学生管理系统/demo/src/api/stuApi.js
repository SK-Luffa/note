// 封装请求函数
import request  from "./request";

export function getStuListApi(){

  return request({
      url:'/students',
        method:'GET',
    })
}
export function addStuApi(data) {

    return request({
        url: '/students',
        method: 'POST',
        data
    })
}