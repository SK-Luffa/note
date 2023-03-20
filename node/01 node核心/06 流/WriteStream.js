const fs = require('fs');
const path = require('path')
const filename = path.resolve(__dirname, "./abc.txt")

const ws=fs.createWriteStream(filename,{
    encoding:'utf-8',
    highWaterMark:8
})

const flag=ws.write('a')
console.log(flag);