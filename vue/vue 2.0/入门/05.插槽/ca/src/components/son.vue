<template>
  <div>
    <p>张三</p>
    <p>{{name}}</p>
      <slot name="le"></slot>
    <slot></slot>
    <slot name="si"></slot>
  
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