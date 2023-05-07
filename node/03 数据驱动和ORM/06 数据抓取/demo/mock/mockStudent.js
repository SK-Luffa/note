const Mock=require('mockjs')

const res=Mock.mock({
    'datas|700':[{
        name:'@cname',
        birthdady:'@date',
        'sex|1-2':true,
        phone:/1\d{10}/,
        'ClassId|1-10':0
    }]
}).datas

console.log(res);
const Stu=require('../models/Student')

Stu.bulkCreate(res)