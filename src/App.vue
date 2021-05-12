<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  align-items: flex-start;
  background-color: #0B1D26;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100vw;
}
</style>
