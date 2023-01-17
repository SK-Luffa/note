// function* createGenerator() {

//     console.log("生成器函数的函数体");
//     yield 1
//     console.log("生成器函数的函数体1");
//     yield 2
// }

// let generator = createGenerator()//调用后一定得到一个生成器


function* createArrayIterator(arr){
   
for (let index = 0; index < arr.length; index++) {
    const item =arr[index]
    console.log(`第${index}次迭代`);
    yield item
    
}
}
var generator= createArrayIterator([1,2,3,4,5,6 ])