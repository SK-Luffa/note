<template>
  <div id="app">
{{gdpRef}}
  </div>
</template>
<script>
import { ref } from "vue"
export default {
  setup() {
    const gdpRef = ref([]);
    async function fetchGDP() {
      gdpRef.value = await fetch("/api/gdp.json").then((resp) => resp.json())
    }
    fetchGDP()
    return {
      gdpRef
    }
  }


}
</script>
<style lang="less" scoped>

</style>
