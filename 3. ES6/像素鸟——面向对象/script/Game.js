class Game {
    constructor() {
        this.sky = new Sky();
        this.land = new Land(-100);
        this.bird = new Bird();
        // 柱子对生成器
        this.pipeProducer = new PipePareProducer(-100);
        // 计时器 timer
        var timer = null;
        // 计时器 timer的时间间隔  /ms
        this.tick = 16;
        this.gameover = false;
    }
    // 游戏开始
    start() {

        // 判断计时器有没有值，如果有值就不在重复进行重新定义
        if (this.timer) {
            return;
        }
        // 如果游戏结束了（碰到地面天空 柱子）那么就刷新页面 游戏重新开始
        if (this.gameover) {
            window.location.reload(); //刷新页面
        }

        this.pipeProducer.startProduce(); //开始生成柱子
        this.bird.startSwing(); //小鸟煽动翅膀
        this.timer = setInterval(() => {

            const duration = this.tick / 1000;
            this.sky.move(duration); //天空移动
            this.land.move(duration); //大地移动
            this.bird.move(duration); //小鸟移动
            this.pipeProducer.pears.forEach(pair => { //所有的柱子对开始移动
                pair.move(duration);
            })
            // 判断游戏是否结束
            if (this.isGameOver()) {
                this.stop();
                this.gameover = true;
                // 将所有柱子对中的某一个柱子拿出来。我们进行判断。看看有没有碰撞



            };
        }, this.tick)
    }
    // 碰撞函数，主要是用来对小鸟对每个柱子对的碰撞做出处理的函数
    ifHit(rec1,rec2){//rec1 第一个矩形 小鸟 rec2 第二个矩形，柱子{上柱子或下柱子}
        // 碰撞规则
        // 横向:两个矩形的中心点的横向距离， 是否小于宽度之和的一半
        // 纵向：两个矩形的中心点的纵向距离， 是否小于高度之和的一半
        var conterX1=rec1.left+rec1.width/2;
        var conterY1=rec1.top+rec1.height/2;
        var conterX2=rec2.left+rec2.width/2;
        var conterY2=rec2.top+rec2.height/2;
        var disX=Math.abs(conterX1-conterX2);//中心点的横向距离
        var disY=Math.abs(conterY1-conterY2);//中心点的纵向距离

        if(disX<(rec1.width+rec2.width)/2&&disY<(rec1.height+rec2.height)/2){
            return true;
        }
        return false;

    }
    // 游戏结束
    isGameOver() {
        //    鸟碰到了大地 游戏结束
        if (this.bird.top === this.bird.maxY) {
            return true; //游戏结束 返回true执行 执行游戏结束 31行
        };
        for (let i = 0; i < this.pipeProducer.pears.length; i++) {
            const pear = this.pipeProducer.pears[i];
            // 看柱子对pear是否跟鸟进行了碰撞
            if(this.ifHit(this.bird,pear.DownPipe)||this.ifHit(this.bird,pear.UpPipe)){
                return true;
            }
        }
    }
    
    // 游戏暂停
    stop() {
        clearInterval(this.timer); //清空定时器 此时定时器里面设定的所有元素将不会改变
        this.timer = null; //清楚时间间隔
        this.bird.stopSwing(); //小鸟停止扇翅膀
        this.pipeProducer.stopProduce(); //柱子产生器停止生产柱子
    }
    // 注册键盘关联事件
    regEvent() {
        window.onkeydown = (e) => {
            //判断按下的键是不是回车键，如果是判断timer是否有值，如果有值就让其游戏停止，否则就继续，如果不是回车键就返回undefined
            e.key === "Enter" ? (this.timer ? g.stop() : g.start()) : "Enter is Question";
            e.key === " " ? this.bird.jump() : "Space is Question";
        }
    }
}
const g = new Game();
g.regEvent();