# 联表查询
   
1. 全连接，笛卡尔积   select * from 表1,表2   查出来的数据是两张表的乘积
2. 左连接，左外连接，left join    select *  from  表1 as T1 left join 表2 as T2   
3. 右链接，右外连接，right join   select *  from  表1 as T1 right join 表2 as T2
4. 内连接，inner join           select *  from  表1 as T1 inner join 表2 as T2


* 不论是左连接还是右连接 在查询到不存在的数据时，至少会显示一条数据，而内连接则不会显示  