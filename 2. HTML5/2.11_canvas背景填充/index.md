
 var k = document.getElementsByTagName("body")[0];
        var s = document.createElement("canvas");
        s.width = 300;
        s.height = 500;
        k.appendChild(s);
        var opens = s.getContext("2d");



####     填充图片  opens.drawImage(); 
        var img = new Image();
        img.src = "./123.png";
        img.onload = function () {
            opens.beginPath();
          
####   opens.translate(100,100)   //这里需要必须提前改变坐标系 否则该表坐标系无效
            
####  var bg = opens.createPattern(img, "no-repeat"); //两个参数 一个是图片对象，另一个是 图片是否重复
          
####       opens.fillStyle = bg;         //当做背景颜色填充
####    opens.fillRect(0, 0, 200, 100);  // 渲染上去
          opens.stroke();
        }