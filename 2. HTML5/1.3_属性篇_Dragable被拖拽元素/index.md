# draggable="true" ----表示当前元素可拖拽

 兼容性： chrom、Safari：支持    Firefox(只有极少数版本)不支持

 默认支持拖拽:<a></a>、<img/> 

 ## 并且，当他们有了拖拽功能以后，就会有拖拽事件
    
    拖拽的生命周期：  
                  拖拽开始   拖拽进行中 拖拽结束 
     拖拽的组成：
                 被拖拽的物体，目标区域
    按下的时候不移动是不会触发 ondragstart 事件

                        ondragstart=function(e){}------开始事件
    
                       ondrag=function(e){}------移动事件

                       ondragend=function(e){}----结束事件

                       ondragenter=function(e){}---不是图形进入就触发，而是拖拽的鼠标进入该元素才进行触发 
                        ondragover=function(e){}-----鼠标移入该元素就不停的触发

                        ondragleave=function(e){}----鼠标进入然后移出该元素时触发
                       
                        ondrop=function(e){}-------- 鼠标进入该区域松开时触发时进行触发

#### 所有的标签元素，当拖拽周期结束是，默认事件是回到原处    
           所以我们需要在ondragover事件中添加一个阻止默认事件
            ondragover=function(e){
               e.preventDefault();
            }
#### 事件是由行为触发的， 但是，一个行为可以触发不止一个事件

## 如果我们想要阻止当前默认事件的发生，那么就必须在当前事件的上一个事件进行阻止
    




