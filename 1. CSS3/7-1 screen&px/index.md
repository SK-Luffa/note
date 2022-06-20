### 触发重构的方式
1. 改变窗口的大小
2. 改变文字的大小
3. 内容的改变，输入框输入文字
4. 激活伪类 例如  :hover
5. 操作class属性
6. 脚本操作dom
7. 计算offsetWidth和offsetHeight
8. 设置style属性


will-change:transform--------告诉浏览器一会儿当前元素要用这个属性，你单独拎出一个层 把他放里面;----兼容差   GPU加速
