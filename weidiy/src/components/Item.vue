<template>
    <div class="itemWarp" @click="changePage">
       <span v-show="!change">
            <slot name="normalImage"></slot>
       </span>
       <span v-show="change">
           <slot name="activeImage"></slot>
       </span>
        <span>{{txt}}</span>
    </div>
</template>
<script>

export default {
    name:"item",
    props:["txt","page"],
    data () {
        return {
            change:false
        }
    },
    methods: {
        changePage(){
            console.log(this.page);
            this.$router.push("/"+this.page)
        },

    }
}

// 子组件：
</script>
<style scoped>

</style>
