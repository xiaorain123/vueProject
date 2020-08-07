<template>
  <div id="app">
    <router-view/>
    <router-view name="son2"></router-view>
    <router-view name="son3"></router-view>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

</style>
