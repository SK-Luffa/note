# 函数和分组

### 函数：内置函数   自定义函数

## 函数
* 内置函数
    1. 数学   
       1. ABS(x)        返回x的绝对值     select ABS(x )
       2. CEILING(x)    返回大于x的最小整数
       3. FLOOR(x)      返回小于X的最大整数值
       4. MOD(x/y)      返回x/y的模（余数）
       5. PI()          返回Pi的值（圆周率）
       6. RAND()        返回0-1的随机值
       7. ROUND(x,y)    返回参数x的四舍五位的有y位小数的值
       8. TEUNCATE(x,y) 返回数字X截短为y位小数的结果
    2. 聚合
       1. AVG(col)      返回指定列的平均值
       2. COUNT(col)    返回指定列中非NULL值的个数 
       3. MIN(col)      返回指定列的最小值
       4. MAX(col)      返回指定列的最大值
       5. SUM(col)      返回指定列的所有值之和 
    3. 字符
       1. CONCAT(s1,s2,...sn)          将s1 s2 sn连接成字符串
       2. CONCAT_WS(sp,s1,s2,...sn)    将s1 s2 sn连接成字符串并用sp字符间隔
       3. TRIM(str)                    去除字符串首部和尾部的所有空格
       4. LTRIM(str)                   从字符串str中切除掉开头的空格
       5. RTRIM(str)                   返回字符串str尾部的空格
    4. 日期
       1. CURDATE()或CURRENT_DATE()        返回当前日期
       2. CURTIME()或 或CURRENT_TIME()     返回当前的时间
       3. TIMESTAMPDIFF(part,date1,date2)  返回date1到date2之间相隔的part值，part是用于指定的相隔的年或月或日
* 自定义函数

## 分组
    
