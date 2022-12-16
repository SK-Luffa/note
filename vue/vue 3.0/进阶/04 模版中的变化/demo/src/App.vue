

<template>
  <div id="app">

    <CheckEditor @update:modelValue="checked=$event" :modelValue="checked" />
  </div>

</template>
<script >
import CheckEditor from "./components/CheckEditor.vue"

const defaultSells = [
  {
    id: 1,
    sell: true,
    title: "iphone"
  },
  {
    id: 2,
    sell: false,
    title: "xaiomi"
  },
  {
    id: 3,
    sell: true,
    title: "huawei"
  },
  {
    id: 4,
    sell: true,
    title: "vivo"
  },
];
export default {

  components:{
    CheckEditor
  },
  data(){
 
    return {
      checked:true,
    }
  }
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
