### text-shadow ---文字阴影
  text-shadow: 10px{横向偏移量} 10px{纵向偏移量} 3px(可选){模糊值} #000{阴影颜色}
  text-shodow:10px 10px 10px #000, 10px 5px 6px #fff -------text-shadow可以添加多个，也就是说一个文字可以有多个阴影
###### 实现一个浮雕效果
       text-shadow: 1px 1px #000{右下黑边},-1px -1px #fff{左上白边} 
###### 实现一个镂刻效果
       text-shadow:-1px -1px #fff{右下白边}, 1px 1px #000{左上黑边}-------将浮雕效果两个阴影的位置调换就能实现镂刻效果
## :: before----在选中的元素之前插入内容并调节样式  这个文字应当归属于当前选中的元素 也就是说我们后续调节选中元素的样式有可能也会影响到before当中的样式 例：
     p::before{
         content:"张三 生孩子啦";
         color:red;
         font-size:15px;
     }
## font-weight: normal{默认 标准粗细}/bold{粗体} /bolder{更粗}/lighter{更细}/100-900{只能100的加}/inherit{继承父级}------设置字体粗细

# *注意：一旦你使用 -webkit-background-clip:text 将文字变成背景以后 那么：text-shadow（文字阴影就会跑到文字上方） 
##  原因 -webkit-background-clip:text 会将文字变成背景，必然是在最下面的 因为text-shadow不属于背景，所以就会呈现在背景上面，故，背景就会跑到文字上方
##  如何解决：没有办法解决，只能去调text-shadow的透明度（最后颜色值写rgba），让他看起来不会遮住 实际上他仍然处于背景文字的上方 

### -webkit-text-stroke:文字描边    IE目前现在还是不兼容，欧朋mini也不兼容   剩下的 兼容但是不论火狐还是其他的必须加一个-webkit-前缀
      -webkit-text-stroke: 1px{文字描边宽度} red{描边颜色 顺序可以颠倒}
### @font-face{} 引入外部字体包 必须写在css根部，不能写在 某个选中的样式里面 例如 div里面 
   @font-face{
          font-family:"张三";字体名称（可自定义）
          src:url() 字体路径
   }
   .div{
          font-family:"张三"   //调用字体包
   }