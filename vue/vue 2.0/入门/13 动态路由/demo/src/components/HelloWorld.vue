<template>
  <div>
<REC :list="list"></REC>
  </div>
</template>
<script>
import REC from "./Recursion.vue"
export default {

  components:{REC},
  data () {
    return {
      list: [
        { name: "a" },
        {
          name: "b",
          list: [
            { name: "a" },
            {
              name: "b",
              list: [
                { name: "a" },
                {
                  name: "b",

                },
                { name: "v" },
                { name: "c" },
              ]
            },
            { name: "v" },
            { name: "c" },
          ]
        },
        { name: "v" },
        { name: "c" },
      ]
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
}
</script>
<style lang="less" scoped>

</style>
