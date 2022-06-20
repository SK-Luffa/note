##     <meta name="viewport" content="width=device-width, initial-scale=1.0">   -------- 将页面大小 根据分辨率不同来进行调节 以展示给用户的大小感觉上差不多 
1. content=  
            width：可视区宽度   device-width 
            width=device-width : 在iphone或者ipad上 横竖屏的宽度=竖屏的宽度          这个属性就会失效或者达不到我们的要求
            initial-scale=1.0  ：windows phone的IE浏览器上  横竖屏的宽度=竖屏的宽度      这个属性就会失效或者达不到我们的要求
###  除此之外我们还可以设置以下属性：
                    user-scalable=no/yes   -----------是否允许用户进行缩放 默认值 yes（允许缩放）主要是手机端
                    minimun-scale:         -----------最小缩放比
                    maximun-scale：        -----------最大缩放比

## 响应式网页开发方法
  1. 流体网格：可伸缩网格（大小宽高 都是可伸缩{可用flex或者百分比来控制大小}float）----》布局上面元素大小不固定可伸缩
  2. 弹性图片：图片宽高不固定（可设置 min-width：100%）
  3. 媒体查询：让网页在不同的终端上显示相同的效果（用户体验相同————>让用户用着更爽）
  4. 主要断点：设备宽度的临界点
                    
## 媒体查询的在css的三种写法
1.  <link rel="stylesheet" media="screen and(max-width:750px)" href="index.css">
2. <style>
        @import "index.css"screen and (max-width:750px);
    </style>
3.  <style>
         @media (max-width:750px) {

            html,
            body {
                width: 100%;
            }
        }
    </style>
##### “and” 操作符

        @media screen and (max-width:750px)and(min-width:0px){} --- 表示小于750px 大于0px 的屏幕 *
#####  “,”操作符
       @media screen amd(max-width:750px),(min-width :8000px){}----表示在小于750 大于800px的屏幕上作用这个css

####  “not”操作符
         @media not screen and (max-width:750px){}-------表示除了小于750的屏幕都用这个css

#### “only”操作符
          @media only screen and (max-width:750px){}-------表示如果当前浏览器不支持媒体查询的话 默认只看媒体特性
          
# 单位{长宽高}（相对单位）

##### rem -----相对于根节点的font-size （html标签）来进行取值

##### em  -----相对于自己本身的font-size值  如果没有则继承其父级的

      vw----vwidth    vh-----xheight
##### vw/vh ------常用在移动端开发相对于视口的单位 整个视口相当于100 vw或者100 vh

##### Vmax  ----相对于视口宽度最大的一个（横屏宽度，竖屏高度） 整个视口相当于100 Vmax

##### Vmin  ----相对于视口宽度最小的一个（横屏高度，竖屏宽度） 整个视口相当于100 Vmin


