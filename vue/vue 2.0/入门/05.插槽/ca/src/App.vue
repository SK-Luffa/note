<template>
  <div id="app">
    <son ref="para">
      <template #si>干啥</template>
      <template #le>咋的</template>
    </son>
  </div>
</template>

<script>
import son from "./components/son.vue";

export default {
  name: "App",
  components: {
    son,
  },
  mounted() {
   this.$refs.para.name="里斯本"
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
