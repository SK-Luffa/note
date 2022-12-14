<template>
  <div>
    <button @click="increase">count{{ count }}</button>
  </div>
</template>
<script>
import {ref} from "vue"
export default {
  setup() {
    // console.log('在所有生命周期钩子函数之前调用');
   let count = ref(0);
    const increase = () => {
      count.value++
      console.log(count);
    }
    return {
      count,
      increase,
    }

  }
}
</script>
<style lang="less" scoped>

</style>
