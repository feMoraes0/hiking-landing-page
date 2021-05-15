<template>
  <div id="app">
    <section class="foreground">
      <Header />
      <SectionController/>
      <Home />
      <Tips />
      <Footer />
    </section>
    <Background :opacity="opacity"/>
  </div>
</template>

<script>
import Background from '@/components/Background.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Home from '@/components/Home.vue';
import SectionController from '@/components/SectionController.vue';
import Tips from '@/components/Tips.vue';

export default {
  name: 'App',
  components: {
    Background,
    Footer,
    Header,
    Home,
    SectionController,
    Tips,
  },
  data() {
    return {
      opacity: 1,
    };
  },
  methods: {
    handleScroll() {
      const { scrollY } = window;
      const homeLimit = 1040;

      if (scrollY > 0 && scrollY < homeLimit) {
        this.handleHomeOpacity(scrollY, homeLimit);
      }
    },
    handleHomeOpacity(scroll, limit) {
      this.opacity = 1 - (scroll / limit);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
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
