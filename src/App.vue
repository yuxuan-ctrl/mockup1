<template>
  <div id="app">
   <!-- <login/> -->
   <!-- <navq></navq> -->
  <!-- <plan-a/> -->
  <router-view></router-view>
  </div>
</template>

<script>
  // import login from './components/Login/login.vue'
  import planA from './components/planA/planA.vue'
export default {
  name: 'App',
  components: {
    // login,
    planA
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>
