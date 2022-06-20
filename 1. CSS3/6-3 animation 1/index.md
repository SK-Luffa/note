# animation 他的第三个值 也是赛贝尔曲线 
       animation: run 4s cubic-bezier()----并且当前的贝塞尔曲线是对animation的每个个关键帧分别进行运动状态的设置 

##### animation-timing-funcion：cubic-bezier()----

## 并且当前的贝塞尔曲线是对animation的每个个关键帧分别进行运动状态的设置  也就是说相当于为每个关键帧都设置了运动状态，而并非只是为整个当前选中的元素设置一个
 
 # animation：1,2,3,4,5,6

 ## “1”： @keyframs
         例如 ：
        @keyframs 容器名称{
            0%{
                left:0;------{position:absolute }
                top:0;
            }
            25%{ 
                left:100px;
                top:0px
            }
            50%{
                  left:100px;
                top:100px
            }
            75%{  left:100px;
                top:100px}
            100%{  left:0px;
                top:0px}
        }
  ##### animation: 容器名称 4s, 容器名称 5s; 一个animation是可以同时运行多个关键帧的    
    例如：
        @keyframs run{
            0%{
                left:0;------{position:absolute }
                top:0;
            }
            25%{
                left:100px;
                top:0px
            }
            50%{
                  left:100px;
                top:100px
            }
            75%{  left:100px;
                top:100px}
            100%{  left:0px;
                top:0px}
        }  

        animation:fun 4s;

##### 注意 @keyframs 的0% 可以写作from  100%可以写作 to    
   
        例如：
            @keyframs run{
            from{
                left:0;------{position:absolute }
                top:0;
            }
            25%{
                left:100px;
                top:0px
            }
            50%{
                  left:100px;
                top:100px
            }
            75%{  left:100px;
                top:100px}
            to {  left:0px;
                top:0px}
        }  
## “2”：animation-duration   持续时间

## “3”：animation-timing-function  过渡类型 cubic-bezier()-----设置贝塞尔曲线

## “4”：animation-delay  延迟时间

## “5”：animation-iteration-count 检索或设置对象动画的循环次数

## “6”: animation-direction 检索或设置对象动画在循环中是否反向运动
        默认值：normal    正向运动
               reverse   反向运动
               alternate 先正向运动然后再反向运动
               alternate-reverse 先反向运动然后再正向运动

## “7”：animation-fill-mode 检索或设置对象动画时间之外的状态
         默认值：none
                forwards 动画结束之后保存动画最后一帧的状态 比如说一开始left为0 最后一帧为 left 100  设置forwords后就保
                          留 在left：100

                backwards  动画开始之前的状态
                both        表示第一帧为动画开始之前的状态 最后一帧为最后结束时的状态 {相当于是backwords和forwords的结合}

## “8”：animation-play-state 设置当前的运动状态 
        默认值：running（运动）/paused（暂停） 


