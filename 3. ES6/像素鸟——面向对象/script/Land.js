
const landDom = document.querySelector(".land");//获取 大地

const landStyle = getComputedStyle(landDom); //获取大地的所有样式

const landWidth = parseFloat(landStyle.width);  //获取大地的宽度
const landHeight = parseFloat(landStyle.height);//获取大地的高度
const landTop = parseFloat(landStyle.top);//因为大地是在底下，故这里我们需要获取其top值


class Land extends Rectangle {
    constructor(speed) {
        super(landWidth, landHeight, 0, landTop, speed, 0, landDom);

    }
    onMove() {
        if (this.left <= -landWidth / 2) {
            this.left = 0;
        }
    }
}
