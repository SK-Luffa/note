const sequelize = require("./db");
const { DataTypes } = require("sequelize")
const Admin = sequelize.define('Admin', {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // name: {
    //     type: DataTypes.String,s
    //     allowNull: false
    // },
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true,//从此以后，该表的数据不会真正的删除而是增加一列deletedAt ，记录删除的时间
})

//   a()
//    async function a () {
//         await Admin.sync({
//             alter: true
//         })
//         console.log('Admin同步完成');
//     }


module.exports = Admin