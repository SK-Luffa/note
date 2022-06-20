// 引入axios包
const axios = require("axios");
const cheerio = require("cheerio");

//得到所有电影的html 字符串
async function getMoviesHtml() {
    //  用axiosAPI{axios这里是一个promise} 请求豆瓣的相应信息
    const resp = await axios.get("https://movie.douban.com/chart")
    return resp.data;
}

// 这个函数主要是用来调用 cheerio库 的，这个库属于jq 用于提取标签内的字符串
async function getMoviesData(datas) {//datas 是axios解析出来的带有标签的字符串  
    const Content_data = cheerio.load(datas);
    const trs = Content_data("tr.item div.pl2 a" );//这里获取所有元素下的 tr元素且class为item 下的div且calss为pl2 下的a元素
    let go = trs.text();//调用text方法 拿到数据
    // go = go.replace(/\s/g, " ");
    go = go.replace(/\s/g, "")
    // go=go.split(`    `)
    console.log(go)
    // go = go.split("/").join().split("                                              ").join();
    // go = go.replace(/\s/g, "")
    // go = go.split(",")
    // var gos=[]
    // for (const key in go) {
    //     if (!key % 2 === 0) { gos.push(go[key]) }
       
    // }
    // return gos;

}

async function test() {
    // 调用 axios 获取页面标签字符串
    const s = await getMoviesHtml();
    //   调用cheerio 将数据提取出来
    const p = await getMoviesData(s);
    //   打印数据
    console.log(p)
}
test();