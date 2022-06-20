<template>
  <div>
    <p>张三</p>
    <p>{{name}}</p>
    <slot></slot>
    <slot name="si"></slot>
    <slot name="le"></slot>
  </div>
</template>

<script>
export default {
    data(){
      return{
        name:"x"
      }
    }
}
</script>

<style>

</style>