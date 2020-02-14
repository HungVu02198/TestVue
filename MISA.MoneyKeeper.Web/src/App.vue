<template>
  <div id="app" class="logo">
    <!--router-link :to="{name:'Test'}">List User</router-link-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
    min-width: 100%;
    min-height: 100%;
    background-image: url(https://lh3.googleusercontent.com/KrlmvNGikWiqNqod0hPSQYD835NWt-h-aflbqxXhAvyzjy5_ZJLeydgONTZOEh9LGf4);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
</style>
