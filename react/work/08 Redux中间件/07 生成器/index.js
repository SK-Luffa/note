function* createGenerator() {

    console.log("生成器函数的函数体");
    yield 1
    console.log("生成器函数的函数体1");
    yield 2
}

let generator = createGenerator()//调用后一定得到一个生成器