var iterator = {

     total : 3,//可迭代三次
     i : 0,//当前的迭代次数

    next() {
        
        var obj= {//当前这一次迭代到的数据
            value:this.i>3?undefined:this.i,
            done:this.i>3
        }
        i++;
        return obj;
    }
} 