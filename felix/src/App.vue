<template>
  <div id="app">
    <topMenu />
    <router-view/>
  </div>
</template>

<script>
import topMenu from '@/components/menu'
export default {
  name: 'app',
  components: {
    topMenu
  }
}
</script>


<style lang="scss">
@import "assets/sass/bulma.sass";
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html{
  background: black;
}
*{
  box-sizing: border-box;
}
</style>
