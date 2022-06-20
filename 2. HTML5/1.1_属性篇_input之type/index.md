1. placeholder  输入框内容提示信息
     例:
        <input type="text" placeholder="请输入手机">
2. type   的新增属性  
    
    例如
       type="text"
    
   新增：
      Calendar类： 基本基于---<from>表单
            1. type="date" -------日期选择{基本没人用}  兼容性不好，虽然截止目前基本上已经全部支持了, 但是实在是他娘的太丑了  2021/5/31
            
            2. type="time"--------输入时间的 几点几点

            3. type="week"-------选择年份第几周

            4. type="datetime-local"-----就是“time+date”  结合体

            5. type="number" ------只能输入数字{兼容不好}-----基本除了chrome其他不兼容

            6. type="email" ------只能输入邮箱 chrome和火狐支持

            7. type="color"-----选择颜色的   基本上只有chrome支持

            8. type="range"min="1" max="100" ----- 拖拽条 获取value就能获取拖拽的数值  safari。chrome支持   

            9. type="search"------ 保留输入框的内容为历史记录，类似于百度搜索框 会保留历史搜索{只有chrome支持}

            10. type="url" ------输入的必须是个url       chrome、firefox支持



