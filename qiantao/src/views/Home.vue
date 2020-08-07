<template>
  <div class="home">
    <h3>我是命名视图</h3>
    <router-link to="/son2">跳转到只显示son1+son2</router-link>
    <router-link  to="/son3">跳转到只显示son1+default</router-link>
    <!-- router-view用来匹配嵌套路由的视图的 -->
    <!-- 嵌套路由视图（同时满足嵌套路由的规则，还要满足视图的规则） -->
    <router-view></router-view>

    <router-view name="son2"></router-view>
    <router-view name="son3"></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
