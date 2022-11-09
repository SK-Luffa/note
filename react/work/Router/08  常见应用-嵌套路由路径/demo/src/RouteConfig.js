const config = {
    user: {
        root: "/user",
        update: "/user/update",
        pay: "/user/pay"
    }
}
 function setConfig() {
    _setConfig(config, "")
}

//将该对象的每一个字符串属性，添加 baseStr
// 规则
// 如果属性名是root，则直接添加 baseStr
// 如果属性名不是root，则添加baseStr/root属性值
// 如果属性值不是字符串，则递归调用该方法
function _setConfig(obj, baseStr) {

    const newBaseStr = baseStr + (obj.root === undefined ? "" : obj.root)
    for (let prop in obj) {
        const value = obj[prop]
        if (typeof (value) === "string") {
            if (prop === "root") {
                obj[prop] = baseStr + obj[prop]
            } else {
                obj[prop] = newBaseStr+value
            }
        } else {
            _setConfig(obj[prop], baseStr + newBaseStr)
        }
    }
}
setConfig();
export default config