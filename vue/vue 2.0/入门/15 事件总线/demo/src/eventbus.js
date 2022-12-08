// 事件总线
const listeners = {}
export default {
    // 监听某个事件 evenName：事件名称  handler触发的函数
    $on(evenName, handler) {
        if (!listeners[evenName]) {
            listeners[evenName] = new Set()
        }
        listeners[evenName].add(handler)
    },
    // 取消监听某个事件evenName：事件名称  handler触发的函数
    $off(evenName, handler) {
        if (!listeners[evenName]) {
            return
        }
        listeners[evenName].delete(handler)
    },
    // 触发某个事件
    $emit(evenName, ...arg) {
        if (!listeners[evenName]) {
            return
        }
        for (const iterator of listeners[evenName]) {
            iterator(...arg)
        }

    }

}