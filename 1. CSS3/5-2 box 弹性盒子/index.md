# 设置到父级 作用到子级上的样式

###  dsiplay：flex;  /  inline-flex  设置当前元素为弹性盒子   
       他们之间的区别就相当于 block和inline-block之间的区别————后面一个可以跟东西，一个不能跟东西 

#### flex-direction  设置弹性盒子的主轴方向 
           默认值 row{水平方向}                     column{垂直方向}   
                 row-reverse{水平方向 自右向左}     column-reverse{垂直方向 自下而上}

#### flex-wrap: 设置超出换行  
            默认值： no-wrap {不换行}
                      wrap { 换行}
                     wrap-reverse{倒叙 换行 }-----傻逼才用，真就换行离谱

#### justify-content：基于主轴进行对齐
           默认值： flex-start
                   flex-end  {主轴 尾部对齐}
                   center    {主轴 中心对齐}
                   space-between{ 主轴 两边对齐 剩下的中间进行自适应}
                   space-around {主轴 当前元素的兄弟之间的空隙相等 但是对于其父级的间隙虽然也在中间但是不等于他与兄弟元素之间的空隙距离}
#### align-items：基于交叉轴进行位置的分配
            默认值：stretch
                   flex-strat {主轴 头部}
                   flex-end   {主轴 尾部}
                   flex-center{主轴 中间部分}
                   baseline   {让当前元素基于内容对齐}
                   stretch    {当没有设置当前元素的高度的时候 他就会把内容撑开到与父级一样高}
### align-items：center和align-content：center 的作用几乎一模一样 唯一的区别是 align必须作用在多行上，单行上不管用

#### align-content: 基于交叉轴进行位置分配 （多行）
              默认值： stretch
                       flex-strat {主轴 头部}
                       flex-end   {主轴 尾部}
                       flex-center{主轴 中间部分}
                       baseline   {让当前元素基于内容对齐}
                       stretch    {当没有设置当前元素的高度的时候 他就会把内容撑开到与父级一样高}

# 设置到子级上的样式

#### order：设置当前元素排列的位置 {z-index是设置当前元素的层级优先级 而order是设置当前元素的排列顺序，并且 值越小，越靠前}
    默认值： 0 当前元素的处于0进行排列

#### align-self  子项基于交叉轴的分配状况
      默认值：auto 根据其父级的align-item值来，如果当前元素没有父级 则设置为 stretch
             flex-strat {主轴 头部}
             flex-end   {主轴 尾部}
             center     {主轴 中间部分}
             baseline   {让当前元素基于内容对齐}
             stretch    {当没有设置当前元素的高度的时候 他就会把内容撑开到与父级一样高}
### align-self 的优先级  
      align-self > align-items
      align-self < align-content


# 超级重点 {比较庞杂}

## 1 flex-grow  2 flex-shrink    3 flex-basis

### flex-grow (拉伸) 当当前元素所在的一行还有剩余空间的时候 flex-grow就会让当前元素按照我们设置到flex-grow比例来分配剩余的空间 最终以调整自己的大小   {放在子级上}
      默认值：0
      所以，我们不仅可以为他们三个一起设值 我们还可以分别为他们三个设值，已达到不同的瓜分比例

### flex-shrink (压缩) 当当前元素整体的宽度/高度 超出父级且不换行的时候 可以使用这个值来进行宽度/高度进行压缩
        默认值：0
# 当他们原本的宽度相等时 缩是按照比例进行缩的  但是  他们真实的压缩比例却不是这么算的 
     假如有三个盒子 找他们的 flex-shrink值 是  1   1  3
     那么他们之间的压缩比例是
#  加权值=（真实内容区的宽度 {content.width}）*{他自己的}shrink+...*shrink+...*shrink
 
               真实内容区的宽度（content）*shrink
 ___________________________________________________________________     *超出部分的宽度   =压缩宽度
  加权值 : {所有子元素的真实内容区的宽度（content）*他们自己的shrink值}

# 注意 上面的宽度值不是整体盒子的宽度，而是真正的内容区 content的宽度  
  


### flex-basis  (表示自身的宽度) 浅显的理解 是用来取代 width  当他和width同时设置给一个元素时，flex-basis的权重要大于width
      默认值： auto 
1. 只写basis或者 basis > width , 代表元素的最小宽度    
2. 并且 basis是提供了当前元素的宽度的下限 width提供了当前元素的上限    basis < realWidth < width

# 当我们设置了 flex-basis 的宽度  并且利用英文不换行的特性将他撑开 那么当前元素将不会参与 flex-shrink的压缩 反之，如果没有设置flex-basis的宽度或者输入英文没超过宽度或者英文换行了 则依旧会被 flex-shrink 进行压缩 