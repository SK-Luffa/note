const os = require('os');
console.log(os.EOL);
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.freemem() / 2 ** 30);
console.log(os.homedir()); 
console.log(os.hostname());
console.log(os.tmpdir());


const path = require('path');
 const base= path.basename("eqwe/qweqw/eqweq/1231.html",".html")
 console.log(base);
console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname("weq/weqw/eq/w/eq/w/index.js"));
console.log(path.extname("weq/weqw/eq/w/eq/w/index.js"));
console.log(path.join("/weq","/weqw/eq/w/eq/w/index.js"));
console.log(path.relative("/weq/a.js", "/weqw/eq/w/eq/w/index.js"));
console.log(path.resolve('/a.js'));

const URL = require('url');

console.log(new URL.URL("https://www.baidu.com/s?tn=68018901_2_oem_dg&ie=utf-8&wd=%E8%AF%B7%E7%97%85%E5%81%87%E7%9A%84%E6%9D%A1%E4%BB%B6"));

const Util = require('util');

async function test(a){
    return new Promise(resolve=>{
        setTimeout(resolve(a), (a));
    })
}
const detest= Util.callbackify(test)
detest(500,(err,d)=>{
    console.log(d);
})
const a={
    a:1,
    b:2,
    c:{
        a: 1,
        b: 2,   
    }
}
const b = {
    a: 1,
    b: 2,
    c: {
        a: 1,
        b: 2,
    }
}

console.log(Util.isDeepStrictEqual(a,b));

