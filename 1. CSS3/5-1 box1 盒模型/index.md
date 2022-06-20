
# IE6混杂模式与弹性盒子


### IE6混杂模式

   普通的盒模型
   boXWidth = ContentWidth + paddingWidth*2 + borderWidth*2;
IE6混杂模式盒子
   boxWidth = Width    {直接等于整个盒子的宽度}
   IE6 内容去如何计算
    ContentWidth = Width - borderWidth*2 -PaddingWidth*2

### box-sizing
   box-sizing:content-box{默认值，普通盒模型} / border-box{ 将普通盒模型转换为IE混杂盒模型}

### overflow
     overflow: hidden  scroll(溢出滚动条)  auto（溢出滚动条，不溢出不显示滚动条）

## 注意： 当overflow-x或overflow-y，他们两个任意一个不是默认值（visible）的时候，如果没设另一个，那么它的默认值（visible）就会跟着已经设置了的一条发生改变  简单理解就是，你不变，我不变，你一变，我就跟着变 

####   设置横向滚动条  
     overflow-x:scroll;overflow-y:hidden  {visible默认值}

    
 ## 横向滚动条出现要满足以下条件
   1. 存在两个DIV 并且存在子父级关系
   2. 包裹文字的子级div必须大于父级的div
   3. 设置父级的 overflow:scroll 或 overflow-x:scroll;overflow-y:hidden

####  设置纵向滚动条
     overflow-y:scroll;overflow-x:hidden
## resize   是否允许用户设置当前元素的大小
## 注意！resize 单独拿出来使用是没有效果的，他必须配合 overflow：hidden/scroll
      resize: none{不允许}  /  both{可以调节宽和高}  /  horizontal{用户可以调节元素的宽度}  /  vertucal{用户可以调节元素的高度}