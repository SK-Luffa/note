const  express=require('express')
const { get } = require('vant/lib/utils')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('分页获取学生')
})


router.get('/:id',(req,res)=>{
  res.send('获取具体的一个学生')
})
router.post('/', function (req, res) {
    res.send('添加一个学生')
})
router.delete('/:id', function (req, res) {
    res.send('删除一个学生')
})
router.put('/', function (req, res) {
    res.send('修改一个学生')
})

module.exports =  router

  
