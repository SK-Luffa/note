
import { pathToRegexp } from "path-to-regexp"

/// 得到匹配结果  匹配结果是一个对象 该对象的属性名对应路径规则中的关键字 ，如果不能匹配返回undefined 
//  path：路径规则 url 具体地址   options相关配置
const pathMatch = (path, url, options) => {
    let keys = [];//保存路径规则中的关键字
    const regEXp = pathToRegexp(path, keys, options);
    const result = regEXp.exec(url)
    if (!result) {
        return;
    }
    let execArr = Array.from(result)
    execArr = execArr.slice(1)
    console.log(execArr, url);
   const params= getparams(result, url)
   console.log(params);
};

function getparams(gruops, url) {
    const obj = {}
    for (let index = 0; index < gruops.length; index++) {
        const value = gruops[index]
        const name = url[index].name;
        obj[name] = value
    }
    return obj
}
pathMatch("/news/:id/:page", "/news/234/1")
export default pathMatch;