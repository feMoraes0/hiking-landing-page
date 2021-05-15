<template>
  <header :style="{'background-color': `rgba(11, 29, 38, ${opacity})`}">
    <img src="@/assets/images/logo.png" alt="logo">
    <ul>
      <li><a href="/">Equipment</a></li>
      <li><a href="/">About us</a></li>
      <li><a href="/">Blog</a></li>
    </ul>
    <button>
      <img src="@/assets/icons/account-circle.svg" />
      <span>Account</span>
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      opacity: 0,
    };
  },
  methods: {
    handleScroll() {
      const { scrollY: scroll } = window;
      const animationLimit = 1040;

      if (scroll > 0 && scroll < animationLimit) {
        this.opacity = scroll / animationLimit;
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
header {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5.33vh 4.167vw;
  position: fixed;
  width: 100vw;
  z-index: 1;

  ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;

    li {
      margin-right: 2.083vw;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: $white-color;
        font-family: $gilroy-bold;
        font-size: 1.125rem;
        line-height: 1.375rem;
        text-decoration: none;
      }
    }
  }

  button {
    align-items: center;
    background-color: transparent;
    border: none;
    color: $white-color;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-family: $gilroy-normal;
    font-size: 1.0625rem;
    line-height: 1.3125rem;

    img {
      margin-right: 8px;
    }
  }
}
</style>
