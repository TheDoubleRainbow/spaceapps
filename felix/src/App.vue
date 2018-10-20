<template>
  <div id="app">
    <topMenu />
    <router-view/>
  </div>
</template>

<script>
import topMenu from '@/components/menu';
export default {
  name: 'app',
  components: {
    topMenu
  },
  created: function(){
    this.$store.dispatch('getData');
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
  background: black url('assets/bg.jpg');
  background-size: cover;
}
*{
  box-sizing: border-box;
}
</style>
