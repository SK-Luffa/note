<template>
    <div>
        <div v-for="(item, index) in list" :key="index">
            {{ item.name }}
            <Res :list="item.list"></Res>
        </div>
    </div>

</template>
<script>

export default {
    name: 'Res', 
    props: {
        list:{}
    },
    data() { 
        return {

        }
    },
   
    methods: {
    },
    created() {
    },
    mounted() {
    },
}
</script>
<style lang="less" scoped>

</style>
