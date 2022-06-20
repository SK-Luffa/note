####  用css设置canvas的宽高不是真正的canvas的宽高 必须写行内样式，或者用js赋值
1.   选中canvas标签
        var canvas=document.getElementsByTagName("canvas")[0];
2.  创建画笔
        var opens=canvas.getContext("2d");

3. 画线。选择一个起点
        opens.moveTo(0,0);
4. 终点
        opens.lineTo(100,100);
        opens.lineTo(100,0);
        opens.lineTo(0,0);
5.  设置线条的粗细
        opens.lineWidth=10;
6.  自动帮你闭合起来  条件：必需第连续的线段  
        opens.closePath();
7.  填充的颜色
        opens.fillStyle="#abcdef";
8.  在画出来的图形中进行填充 
        opens.fill() 
9. 保存
        opens.stroke() 
10.  重新开启
        opens.beginPath()
11.  这样我们也可以同时画出两条不一样的线段宽度
        opens.lineWidth=5;