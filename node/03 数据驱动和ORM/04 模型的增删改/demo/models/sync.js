// 初始化，同步所有模型
require('./Class')
require('./Book')
require('./Student')
require('./Admin')

const sequelize= require('./db')

sequelize.sync({alter:true}).then(()=>{
    console.log('====================================');
    console.log("所有模型同步完成");
    console.log('====================================');
})