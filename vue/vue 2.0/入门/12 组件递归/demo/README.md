# 如何进行组件递归？
 1. render函数 中手动写一个 （不建议，比较恶心）
 2. 使用组件递归
    1. 首先要给组件一个名字啊  export defalut { name:"reight"  data:{...}  } 
    2.  因为是递归自己的 所以要写好props，   通过props来实现自己的数据递归，从而完成组件递归  组件的名称为 name 的名字