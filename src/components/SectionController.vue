<template>
  <ul>
    <li class="active">Start</li>
    <li>01</li>
    <li>02</li>
    <li>03</li>
  </ul>
</template>

<script>
export default {
  name: 'SectionController',
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
