# 6-8 scale(伸缩)&skew(倾斜)(伸缩)&skew(倾斜)
#### scale
    scale(x,y)        x,y >1 表示伸张        x,y < 1 表示压缩
    scaleX()
    scaleY()
    scaleZ()
    scale3d();
#####  1. scale 伸缩的并不是元素本身，而是元素坐标轴的刻度 !!!  
#####  2. scale  同时设置两个scale 会发生叠加操作，而不是覆盖
#####  3. scale  如果进行旋转的话，会保留之前 设置的scale 然后在进行新轴的放大或缩小

# skew 倾斜   skew()倾斜的仍然是坐标轴
   transform：skew（）
     skew(0deg,0deg)  ----默认值 （0deg,0deg）   
## skew 在使用时不仅仅回倾斜坐标轴 并且还会拉伸坐标轴 {在一个元素进行倾斜，那么它的高度一定会发生变化，但是使用skew() 时，元素会被倾斜 但是高度却保持不变 故 元素的坐标轴会被拉伸}
    
   
