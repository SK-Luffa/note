# background
### 1. background-image:url();
                除了可以添加一个url之外还可以添加颜色渐变:
                                                       linear-gradient();-----线性渐变
                                                       radial-gradient();-----径向渐变
                例如：background-image:linear-gradient(#0f0,#f00);
###### 渐变颜色就类似于生成了一张图片，故不能放在background-color或者border-color内使用，
###### 背景图片可以放多张 ：background-image:url(),url();
### 2. background-size: , ;
        background-size在有多个背景图片的时候可以设置多个背景图片的大小，之间用逗号分割，假如是三个背景图片，第一个逗号之前是第一个背景图片的宽高，两个逗号之间是第二个，第二个逗号之后是第三个背景图片 每个背景图片之间的宽和高用空格隔开
### 3. background-repeat：no-repeat；
          background-repeat: repeat{平铺} / no-repeat{不平铺} / repeat-x{平铺一行} / repeat-y{平铺一列} / round{平铺(拉伸或者压缩)} / space{平铺，不满足新增一个的时候用空白填充满足新增一个的时候新增一个（不会压缩图片）}/
         禁止背景图片平铺，否则看不到第二张图片 / round space {横向round 纵向space}
### 4. background-position： 0 0 ，50px 100px；
          origin会影响positiopn的定位 
          对背景图片进行定位{positon的定位方与origin有关，origin是谁，那么position就相对于谁进行定位}
### 5. background—origin; -----设置图片的起始位置（paddding-box 默认值）
     background—origin:border-box{从盒子模型的border开始}/padding-box{从盒子模型的padding开始}/content-box{从盒子模型内容区开始}
### 6. bcakground-clip;--------设置图片的结束位置（截断  而不是缩小）  {border-box 默认值}
       bcakground-clip：border-box{从border开始截（包含border），没啥卵用}/padding-box{从padding开始截断（包含padding）}/content-box{从content开始截断（包含content）}/text
       
# *-webkit-background-clip:text-------图片反切
##### 假如div内有文字，设置这个属性，可以只让文字部分显示图片，其他的部分不显示图片且必须配合以下属性一起写
       -webkit-text-fill-color:transparent（透明）;------文字的填充颜色
       text-fill-color:transparent（透明）;-----------文字填充颜色
### 7. background-attachment;------改变定位属性
#### 一般来说，我们为一个容器设置背景图片，宽高都不足以遮住全部背景，里面放入大量文字，超出部分滚动隐藏  我们滑动文字，文字向上，但是背景图片不变 因为此时背景图片是相对于容器进行定位的，而不是相对于文字进行定位的   而background-attachment 就是用来改变图片相对于谁定位的
            background—attachment: scroll{相对于容器进行定位  默认值 } / local{相对于容器的内容进行定位  CSS3新增}  /  fixed{相对于整个document文档进行定位 类似于position当中的fixed  当然，如果我们把容器移出可视窗口，他便会被隐藏掉，因为它不可能脱离他本身的容器！}
    
### 8. background-size;
      background-size:cover{必须用一张图片来填充背景，（前提） 在不改变图片原始比例的前提下，用一张图片来填充满这个容器}  可能会裁掉一部分图片 / contain{必须用一张图片来填充背景（前提）在不改变图片比例的前提下，让容器包含一张完整的图片（即使可能会出现一点repeat） }可能会有一点空白
  

### 9. overflow:scroll; 超出部分以滚动条的形式隐藏起来



## background-iamge:;
### linear-gradient（to right ,#f40 150px ,#fff 20px）线性渐变
     background-iamge:linear-gradient( to right{左向右},red,green)--------线性渐变（红到绿）   //to right (左向右)  to top （下向上） to left  to buttom    /  to top right(左下 右上)  /   0deg(0角）
##### 并且 linear-gradient 的渐变方向也就是第一个值，也可以不写 
                  background-iamge:linear-gradient(  to right ,#f40 150px   --------150px表示#f40这个颜色到150px的位置 后面是另一个颜色 同理 最后一个参数的 像素值也是用来控制最后一个颜色到当前颜色的距离
##### linear-gradient 不止可以添加两个值，可以添加多个颜色进行渐变

### radial-gradient()--------径向渐变
 #### background-iamge:radial-gradient( circle(圆)/ellipse  (这里还可以写四个值 在 49-52行)  at 100px 150px {用来控制圆心的位置 100px(left) 150px(top) } ,#f40 150px
  background-iamge:radial-gradient( at ,#f40 150px   --------150px表示#f40这个颜色到150px的位置 后面是另一个颜色 同理 最后一个参数的 像素值也是用来控制最后一个颜色到当前颜色的距离
##### linear-gradient 不止可以添加两个值，可以添加多个颜色进行渐变
closest-corner（最近的角 ）让他的放射半径到整个容器离他最“近"的“角”为止
closest-side(最近的边)让他的放射半径到整个容器离他最“近”的“边”为止
farthest-corner（最远的角 ）让他的放射半径到整个容器离他最“远"的“角”为止
farthest-side(最远的边)让他的放射半径到整个容器离他最“远”的“边”为止


## 颜色
  rgba     
  HSL H(色调 颜色)S(饱和度)L(亮度)  -----------支持小写 
  HSLA H(色调 颜色)S(饱和度)L(亮度)A(透明度)----支持小写


  当你不设置border-color的时候 在css1 和css2当中会隐式的将color的值赋值给border-color
                              在css3当中 出现了一个中转值：currentColor  ——————————>   border-color：currentColor   
                                                                                     隐式的 currentColor：Color