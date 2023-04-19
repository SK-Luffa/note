# 查询

  select 条件1,条件2,条件3   from   表名

  查询性别 01 转换为那女

   select 条件1,case sex  when 0 then   "男" else "女 "  end  '性别' ,条件3   from   表名


   # 可以添加where  

  


   1. =
   2. in
   3. is
   4. is not   where sex is not null
   5. > < >= <=
   6. between     where between 1000 and  1200 
   7. like   where name like '%张% '
   8. and
   9. or 

order by  条件  desc(降序) asc(升序)  limit 10，10       --limit 10，10 去掉十条数据找十条数据   limit (page-1)*pagesize,pagesize
