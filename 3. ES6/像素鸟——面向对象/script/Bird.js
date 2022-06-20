
const BirdDom = document.querySelector(".bird");//获取 大地
const gameStyle = parseFloat(getComputedStyle(document.querySelector(".game")).height);//游戏面板的高度
const gameWidth = parseFloat(getComputedStyle(document.querySelector(".game")).width);//游戏面板的高度 柱子对象要用
const BirdStyle = getComputedStyle(BirdDom); //获取大地的所有样式
const BirdWidth = parseFloat(BirdStyle.width);  //获取大地的宽度
const BirdHeight = parseFloat(BirdStyle.height);//获取大地的高度
const BirdTop = parseFloat(BirdStyle.top);//因为大地是在底下，故这里我们需要获取其top值

const BirdLeft = parseFloat(BirdStyle.left)


class Bird extends Rectangle {
    constructor() {
        super(BirdWidth, BirdHeight, BirdLeft, BirdTop, 0, 0, BirdDom);
        this.g = 100;//向下的加速度 单位：px/ms 
        // 最大的Y坐标=天空顶部到地面顶部的距离（整个游戏的高度-大地的高度）-小鸟的高度
        this.maxY = gameStyle - landHeight - this.height;
        this.swingStatus=1;//小鸟翅膀目前的状态
        this.timer=null;//翅膀扇动的计时器
        this.render();
    }
   
    // 开始煽动翅膀
    startSwing(){
        if(this.timer){return};
            this.timer=setInterval(()=>{
                this.swingStatus++;
                if (this.swingStatus === 4) {
                    this.swingStatus = 1;
                }
                this.render();
            },200)
    }  
    render(){
        super.render();//重用父类渲染逻辑
        this.dom.className = `bird swing${this.swingStatus}`;
        // this.dom.className=`bird swing ${this.swingStatus}`;      
    }
    //结束煽动翅膀
    stopSwing(){
        clearInterval(this.timer);
        this.timer=null;
    }
    move(duration) {
        super.move(duration);//调用父类的move方法
        // 根据加速度改变速度   加速度=原来的速度+新的加速度
        this.ySpeed += this.g * duration;

    }
    // 控制坐标的范围，大于等于地面的距离就over  
    onMove() {
        if (this.top < 0) {
            this.top = 0;
        } else if (this.top > this.maxY) {
            this.top = this.maxY;
        }
    }
    // 向上跳，直接给一个向上的速度 -向下速度
    jump(){
        this.ySpeed=-100;
    }


}
