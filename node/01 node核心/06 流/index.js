// const {Readable,Writable}=require("stream")

const fs =reuqire('fs');
const path=require('path')
const filename=path.resolve(__dirname,"./abc.txt")
fs.createReadStream(filename)