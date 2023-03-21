const fs = require('fs');
const path = require('path');

function method2() {
    const from = path.resolve(__dirname, './abc.txt')
    const to = path.resolve(__dirname, './abc2.txt')

    const rs = fs.createReadStream(from);//创建读取流
    const ws = fs.createWriteStream(to);//创建写入流


    rs.on('data', chunk => {
        const flag = ws.write(chunk)
        if (!flag) {
            rs.pause()
        }
    })

    ws.on('drain', () => {
        rs.resume()
    })
    rs.on('close', () => {
        ws.end()

    })
}
method2()