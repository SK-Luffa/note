
const Books =require('../models/Book')

// 抓取豆瓣读书中的数据信息

const Axios = require('axios').default

const Cheerio = require('cheerio')




// 获取豆瓣读书网页的源代码
const getBookHTML = async () => {
    const res = await Axios.get('https://book.douban.com/latest')
    return res.data
}




// 从豆瓣读书中得到一个完整的网页，并从网页中分析出书籍的基本信息，然后得到一个书籍的详情页链接数组
const getBookList = async () => {


    const res = await getBookHTML()
    const $ = Cheerio.load(res)

    const lis = $('.article .chart-dashed-list li .media__img a')

    const links = lis.map((i, el) => {
        const href = el.attribs['href']
        return href
    }).get()

    return links
}


// 根据书记详情页的地址   得到一本书的详细信息
const getBookDetail = async (detailUrl) => {
    const res = await Axios.get(detailUrl)

    const $ = Cheerio.load(res.data)

    const name = $('#wrapper h1 span').text().trim();
    const imgurl = $('#mainpic .nbg img').attr('src')
    const spans = $('#info span.pl')

    // 获取作者
    const authorSpan = spans.filter((i, el) => {
        return $(el).text().includes('作者')
    })
    const author = authorSpan.next("a").text()

    // 获取出版日期
    const date = spans.filter((i, el) => {
        return $(el).text().includes('出版年')
    })
    const publicshDate = date[0].nextSibling.nodeValue.trim()

    return {
        name,
        author,
        imgurl,
        publicshDate,


    }

}



// 获取所有的数据信息

const fetchAll = async ()=>{
    const res1 = await getBookList()

    const proms = res1.map(item => {
        return getBookDetail(item)
    })
  return  Promise.all(proms)
}
// fetchAll().then(res=>{
//     console.log(res);
// })

// 得到书籍信息保存到数据库
 
const saveToDB=async()=>{
     
   const res= await fetchAll()
   console.log(res);
//    await Books.bulkBuild(res)
//    console.log('保存书籍成功')
}
saveToDB()
// getBookList().then(res => {
//     console.log(res);
// })