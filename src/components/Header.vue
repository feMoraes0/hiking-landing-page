<template>
  <header>
    <img src="@/assets/images/logo.png" alt="logo">
    <ul>
      <li><a href="/">Equipment</a></li>
      <li><a href="/">About us</a></li>
      <li><a href="/">Blog</a></li>
    </ul>
    <button>
      <span>Account</span>
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
    background-color: transparent;
    border: none;
    color: $white-color;
    cursor: pointer;
    font-family: $gilroy-normal;
    font-size: 1.0625rem;
    line-height: 1.3125rem;
  }
}
</style>
