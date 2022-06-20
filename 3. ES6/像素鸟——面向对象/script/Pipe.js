// 水管类 单个水管

class Pipe extends Rectangle {
    constructor(height, top, speed, dom) {
        super(52, height, gameWidth, top, speed, 0, dom);
    }
    // 向左已经超出界面的时候此时水管就没有了意义，那么我们可以进行移除
    onMove() {
        if (this.left < -this.width) {
            // 移除超出界限的水管
            this.dom.remove();
        }
    }
}
// 随机函数用以生成水管的高度
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// 水管对 一对水管 
class PipePare {
    constructor(speed) {
        //上下两个水管之间的空隙的高度
        this.spaceHeight = 200;
        // 水管最小高度
        this.MinHEight = 80;
        // 水管的最大高度
        this.MaxHeight = landTop - this.MinHEight - this.spaceHeight;
        // 上水管高度
        const UpHeight = getRandom(this.MinHEight, this.MaxHeight);

        const UpDom = document.createElement("div");
        UpDom.className = "pipe up";




        this.UpPipe = new Pipe(UpHeight, 0, speed, UpDom);//上水管
        const downHeight = landTop - UpHeight - this.spaceHeight;
        const downTop = landTop - downHeight;

        const DownDom = document.createElement("div");
        DownDom.className = "pipe down"
        this.DownPipe = new Pipe(downHeight, downTop, speed, DownDom)//下水管
        const gameDom = document.getElementsByClassName("game")[0];
        gameDom.appendChild(UpDom);
        gameDom.appendChild(DownDom);
    }
    /**
     * 该柱子对是否已经无用或被移出视野
     */
    get useLess(){
        return this.UpPipe.left<-this.UpPipe.width; 
    }
    // 柱子进行移动
    move(duration) {

        this.UpPipe.move(duration);
        this.DownPipe.move(duration);
    }
}
// 用于多组柱子的生成
class PipePareProducer {
    constructor(speed) {
        this.speed = speed;
        this.pears = [];
        //   计时器
        this.timer = null;
        //   时间间隔/ ms
        this.tick = 1500;
    }
    //   开始产生柱子对
    startProduce() {
        if (this.timer) { 
            return
        }
        this.timer = setInterval(() => {
            this.pears.push(new PipePare(this.speed));
            for (let i = 0; i < this.pears.length; i++) {
                var pair=this.pears[i];
                if(pair.useLess){
                    this.pears.splice(i,1);
                    i--;
                }
                
            }
            // 移除掉无用的柱子对
        }, this.tick)
    }
    stopProduce() {
        clearInterval(this.timer);
    }
} 

