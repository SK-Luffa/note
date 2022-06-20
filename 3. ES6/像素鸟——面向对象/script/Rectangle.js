// 矩形类
// 属性：宽高 横纵坐标   横向纵向速度 对应的dom对象
// xSpeed：横向速度，单位（像素/秒 ）正数向右，负数向左
class Rectangle{
    constructor(width,height,left,top,xSpeed,ySpeed,dom){
        this.width=width;
        this.height=height;
        this.left=left;
        this.top=top;
        this.xSpeed=xSpeed;
        this.ySpeed=ySpeed;
        this.dom=dom;
        this.render();
    }
    // 方法 去渲染这个dom的一些属性
    render(){
        this.dom.style.width=this.width+"px";
        this.dom.style.height=this.height+"px";
        this.dom.style.left=this.left+"px"
        this.dom.style.top=this.top+"px"
    }
    //按照矩形的速度，和指定的时间，移动矩形  duration时间：单位秒 
    move(duration){
      const xDis=  this.xSpeed*duration;//横向距离=横向速度*时间
      const yDis=this.ySpeed*duration;
      this.left=this.left+xDis;//新的横向位置=旧的横向位置+横向距离
      this.top =this.top+yDis; 
    //   是否存在onMove方法如果存在就调用  
      if(this.onMove){
        //   每次移动后，渲染前，均会调用该方法
          this.onMove();
      }
      this.render();//重新渲染这个页面
    }
}