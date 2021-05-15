<template>
  <div id="app">
    <section class="foreground">
      <Header />
      <Home />
      <Tips />
      <Footer />
    </section>
    <Background />
  </div>
</template>

<script>
import Background from '@/components/Background.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Home from '@/components/Home.vue';
import Tips from '@/components/Tips.vue';

export default {
  name: 'App',
  components: {
    Background,
    Footer,
    Header,
    Home,
    Tips,
  },
};
</script>

<style lang="scss">

div#app {
  background-color: $background-color;
  width: 100vw;
  height: 100%;
}

div#app section.foreground {
  position: relative;
  width: 100vw;
  z-index: 2;
  background-color: transparent;
}
</style>
