const { Sequelize } = require('sequelize')

//定义数据库
const sequelize = new Sequelize('cese', 'root', 'SK8sigua$', {
    host: '114.116.214.98',
    dialect: 'mysql',
    // logging:null 
})

module.exports =sequelize;
 