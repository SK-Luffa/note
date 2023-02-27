const fs=require("fs");

const path=require("path")

const myfiles=path.resolve(__dirname,"./myfiles/1.txt")
// fs.readFile(myfiles,"utf-8",(e,content)=>{
//     console.log(content);
// })

fs.promises.writeFile(myfiles, "张三is i",{ flag:'a'})
