# 数据库设计 
   1. SQL：
       1. 结构化查询语言
       2. 大部分关系型数据库，拥有着基本一致的sql语法
       3. 分支
         1. DDL Data Definition Language 数据定义语言   操作数据库对象：库、表、视图、存储过程
         2. DML Data Manipulation Language 数据操作语言   数据库中的记录
         3. DCL Data Control Language  数据控制语句  操作用户权限
   2. 管理库：
       1. 创建库 create database name
       2. 切换当前库 use name
       3. 删除库 drop database name
   3. 管理表
       1. 创建表 
          1.  字段：
            1. 字段类型
              1. bit：占1位，0或1，false或true
              2. int：占32为，整数
              3. decimal(M,N)；能精确计算的实数，M是总的数字位数，N是小数位数
              4. char(n): 固定长度n的字符
              5. varchar(n)：长度可变，最大长度位n的字符
              6. text: 大量的字符
              7. date：仅日期
              8. datetime：日期和时间
              9. time：仅时间 
   4. 主键和外键
      1. 主键必须满足以下要求
         1. 唯一
         2. 不能更改
         3. 没有业务含义  
   5. 表关系
     1. 一对一
     2. 一对多
     3. 多对多
   6. 三大设计范式 
     1. 要求数据库表的每一列都是不可分割的原子数据项
     2. 非主键列必须依赖主键列
     3. 非主键列必须直接依赖主键列