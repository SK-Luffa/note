# translate------平移当前元素
    translate(x,y，)-------平移X、Y、Z轴
    translateX()    -------平移X
    translateY()    -------平移Y
    translateZ()    -------平移Z
    translate3d(x,y,z)

# perspective -----景深  perspctive不是transform的属性！
### 我们看到的perspective的结果是基于当前元素在屏幕上的投影
# perspective-origin:---------设置景深的角度

## transform上有个属性是perspective() ----这个是设置他自己的景深的 而perspective： 一般是用在父级上的

## transform-style: preserve3d-------- 给那个元素设置这个属性 那么这个属性就会变成一个3d空间   建议直接加在其父级，在其祖父级加是不太管用的
一般我们一些一个旋转的盒子之类的东西
##### 旋转轴除了之前我们说的 translateX、Y、Z 之外，我们还可以设置 perspective-origin  来进行设置空间的旋转



  
 