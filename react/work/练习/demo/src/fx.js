const kkus = []
const fx = {

    // 发布订阅模式
    on: (name, fnList) => {//name 方法名，fn方法数组
        console.log('发布者');
        for (const item of kkus) {
            if (item.name === name) {
                throw console.error("名称重复");
            }
        }

        kkus.push({ name, fnList })
    },
    emit: (name) => {//name是name订阅的方法名
        console.log("订阅者");
        for (const item of kkus) {
            if (item.name === name) {
                
                item.fn()
            }
        }
    },

   
}

export default fx