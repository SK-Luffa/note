const Mock =require('mockjs')
const book=require('../models/Book')

const res=Mock.mock({
    'dats|20':[{
        name:"@cname",
        imgurl: "@cname",
        publicshDate:'@cname',
        author:'@cname'
    }]
}).dats

book.bulkCreate(res)
