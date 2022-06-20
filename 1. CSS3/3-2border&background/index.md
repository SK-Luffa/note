
### border-image
  1.  border-image-source:url();---引入一个图片 -----支持渐变色 ；border-iamge-source：linear-gradient(red,green){从红色渐变为绿色，但必须配合border-image-slice使用 }
  2.  border-image-slice：13数字       4个值 且值代表为px 但是不能写px单位（10{竖线左} 10{竖线右} 10{横线} 10{横线} ):代表了四条分割线  会将背景图片分为九宫格 除了第九部分（中间部分）以外，其余部分会被放进边框对应的位置  （井）分割
  3. border-image-outset :100px;  图片向外延伸100px 
  4. border-image-width:1(默认); 设置boder当中能显示的图片背景的宽度 1(默认值)为1倍 也可以设置为像素值 设置为auto的话，就会向border-image-slice看齐 为100 但不是倍 而是 100px 
  5. border-image-repeat: (no-repeat/stretch{默认值  拉伸 }  /round拉伸平铺 就是当拉伸的程度满足新增一个平铺的宽度的一半，就会新增一个平铺 并压缩当前行的平铺} /repeat{平铺} / space{先用一个，空出来的地方用空白填充，当宽到达一定程度的时候就会整体压缩，产生第二个平铺}  )
  6. 联合写法：border—image：soure slice repeat;

   