<template>
  <header>
    <img src="@/assets/images/logo.png" alt="logo">
    <ul>
      <li><a href="/">Equipament</a></li>
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
  width: 100%;
}
</style>
