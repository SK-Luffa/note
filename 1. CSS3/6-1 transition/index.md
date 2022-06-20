# transition  过渡
    transition： 1 2 3 4  四个值   ——————并且可以同时监听多个属性 
         例如：transition:height 2s linear 1s,width 2s linear 1s

    “1” ：transition-property  —————    用来监听我们到底监听那个属性的改变   all ---表示监听所有属性
          例如：transition-property: width,height;  表示只监听 width和height的变化

    “2” ：transition-duration  ——————    时间间隔 表示当前的过渡动画使用多少秒完成   单位：秒
          例如：transition-duration:0.2s   表示过渡时长为0.2秒
    
    “3” ：transition-timing-functuion ——————   过渡动画的运动状态：{慢快慢，快慢快 匀速}
           例如：transition-timing-functuion:linear    表示匀速运动
    
    “4” ：transition-delay     ———————    等待多少秒再开始执行 类似于settimeout  单位：秒
            例如：transition-delay:5s 表示等待五秒后执行  
## 注意 有些属性是不支持过渡的 例如： display
