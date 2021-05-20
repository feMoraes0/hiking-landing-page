<template>
  <ul>
    <li v-on:click="onClick(0)" :class="current === 0 ? 'active' : ''">Start</li>
    <li v-on:click="onClick(1)" :class="current === 1 ? 'active' : ''">01</li>
    <li v-on:click="onClick(2)" :class="current === 2 ? 'active' : ''">02</li>
    <li v-on:click="onClick(3)" :class="current === 3 ? 'active' : ''">03</li>
  </ul>
</template>

<script>
import helpers from '@/helpers/index';

export default {
  name: 'SectionController',
  data() {
    return {
      current: 0,
      anchorsPosition: [300],
      baseElement: 'section#tips',
    };
  },
  methods: {
    handleScroll() {
      const { scrollY: scroll } = window;

      if (scroll > this.anchorsPosition[this.current] && this.current < 3) {
        this.current += 1;
      } else if (this.current > 0 && scroll <= this.anchorsPosition[this.current - 1]) {
        this.current -= 1;
      }
    },

    onClick(tip) {
      window.scrollTo({
        top: tip ? this.anchorsPosition[tip] : 0,
        left: 0,
        behavior: 'smooth',
      });
    },

    updateBasedElementsPosition() {
      const { childNodes } = document.querySelector(this.baseElement);
      this.anchorsPosition = [300];

      childNodes.forEach(({ id: nodeId }) => {
        const absoluteNodePosition = helpers.getAbsoluteElementPositionById(nodeId);
        this.anchorsPosition.push(absoluteNodePosition - 150);
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateBasedElementsPosition);
    this.updateBasedElementsPosition();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateBasedElementsPosition);
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
