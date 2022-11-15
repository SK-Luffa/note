// import a from "./a"
// import $ from "../node_modules/jquery/dist/jquery"
var fs=require("fs")//内置模块fs 用于模块处理
var buss=fs.readFileSync("./lus.txt",{
    encoding:"utf-8"
})
console.log(buss) 