const Mock=require('mockjs')

const res=Mock.mock({
    "datas|10":[{
        "id|+1":1,
        name:"我是第 @id",
        openDate:'@date'
    }]
}).datas

console.log(res);

const resx=require('../models/Class')

resx.bulkCreate(res)