<template>
  <div id="app">
    <loading v-if="loading"/>
    <home v-else/>
  </div>
</template>

<script>
import home from './components/home.vue';
import loading from './components/loading.vue';
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      loading : true
    }
  },
  components: {
    home,
    loading
  },
  async created() {

    console.log(this.loading);
    let self = this;
    setTimeout(function() {
      console.log(self.loading);
      self.loading = false;
      console.log(self.loading);
    },1000)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 80px auto;
  display: flex;
}
</style>
