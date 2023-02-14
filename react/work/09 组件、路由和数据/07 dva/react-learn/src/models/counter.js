export default {
    namespace: "counter",
    state: 0,
    reducers: {
        // 增加
        increase(state) {
            return state + 1
        },
        // 减少
        decrease(state) {
            return state-1
        }
    },
    effects:{
          *asyncIncrease(action,obj){
              console.log(obj);
          }
    }

}