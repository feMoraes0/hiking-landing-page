<template>
  <ul>
    <li :class="current === 0 ? 'active' : ''">Start</li>
    <li :class="current === 1 ? 'active' : ''">01</li>
    <li :class="current === 2 ? 'active' : ''">02</li>
    <li :class="current === 3 ? 'active' : ''">03</li>
  </ul>
</template>

<script>
export default {
  name: 'SectionController',
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    handleScroll() {
      const { scrollY: scroll } = window;

      if (scroll >= 0 && scroll < 300) {
        this.current = 0;
      } else if (scroll >= 300 && scroll < 1020) {
        this.current = 1;
      } else if (scroll >= 1020 && scroll < 1830) {
        this.current = 2;
      } else {
        this.current = 3;
      }
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

<style lang="scss" scoped>
ul {
  top: 0;
  right: 0;
  margin-top: 30.19vh;
  margin-right: 4.20vw;
  position: fixed;
  list-style: none;

  li {
    border-right: 3px solid transparent;
    color: $white-color;
    cursor: pointer;
    font-family: $gilroy-normal;
    font-size: 1.125rem;
    line-height: 60px;
    padding-right: 32px;
    text-align: right;

    &.active {
      border-color: $white-color;
    }
  }
}
</style>
