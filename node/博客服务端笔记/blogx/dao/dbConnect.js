// 此文件负责数据库连接


// 引入seqelize 模型
const { Sequelize } = require('sequelize')

const env=require('./env')

// 引入数据库信息配置文件，也就是你的数据库信息

// 创建数据库连接

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PWD, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
    logging: false,//控制sql语句是否在控制台显示
})

const x = (async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()



