<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <h2>
      Home Page <router-link :to="{name:'Login'}">Sign In</router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to MISA MoneyKeeper'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: -10;
    padding: 10px 100px 60px 100px;
    color: #000000;
    color: ActiveBorder#4400fd;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
