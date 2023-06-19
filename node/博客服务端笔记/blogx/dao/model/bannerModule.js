// 引入sequelize
const { DataTypes } = require("sequelize");
const seqs = require("../dbConnect");

module.exports = seqs.define(
  "banner",
  {
    //这里是连接数据库以后调用define方法 去创建一张表并且添加字段
    // 这张表有哪些字段
    midImg: {
      type: DataTypes.STRING,//类型
      allowNull: false,//是否可以为空
    },
    bigImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true, //这个是设置是否在表名称后面+s  默认为false +s  设置true就不加s
    createdAt: false, //是否需要createdAt字段，默认为true，需要
    updatedAt: false, //是否需要这个时间字段，默认为true，需要
  }
);
