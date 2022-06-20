//基于面向对象开发

// 首先我们看这个像素鸟游戏当中有什么东西
    // 1. 鸟  2. 背景 天空  3. 大地  4.水管

    // 他们有一个共同的父级 矩形{鸟，背景 大地 水管 都是可移动的矩形}

  const  SkyDom=document.querySelector(".sky");//获取 天空

    const skyStyles=getComputedStyle(SkyDom) //获取天空的所有样式
    
    const skyWidth=parseFloat(skyStyles.width);
     const skyHeight=parseFloat(skyStyles.height);


    class Sky extends Rectangle{
        constructor(){
            super(skyWidth,skyHeight,0,0,-100,0,SkyDom);
            
        }
        onMove() {
              if(this.left<=-skyWidth/2){
                  this.left=0;
              }  
        }
    }
  