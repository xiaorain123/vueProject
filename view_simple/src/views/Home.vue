<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <router-link to="/view_son1">跳转到1</router-link>
      <br>
      <router-link to="/view_son2">跳转到2</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
