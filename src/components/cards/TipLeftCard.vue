<template>
  <div class="left-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TipLeftCard',
};
</script>

<style lang="scss" scoped>
div.left-card {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18.51vh;

  div.content {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 7.81vw;
    width: 32.92vw;

    p {
      align-items: center;
      color: #FBD784;
      display: flex;
      font-family: $gilroy-bold;
      font-size: 1.125rem;
      line-height: 1.375rem;
      margin-bottom: 27px;
      text-transform: uppercase;

      &::before {
        content: "";
        display: initial;
        background-color: #FBD784;
        width: 3.125vw;
        height: 2px;
        margin-right: 32px;
      }
    }

    h1 {
      color: $white-color;
      font-size: 3rem;
      line-height: 3.8125rem;
      margin-right: 4.01vw;
      text-transform: capitalize;
    }

    span {
      color: $white-color;
      font-family: $gilroy-normal;
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 2rem;
      margin-top: 27px;
    }

    button {
      background-color: transparent;
      border: none;
      color: #FBD784;
      font-family: $gilroy-normal;
      font-size: 1.125rem;
      line-height: 1.375rem;
      margin-top: 27px;
    }
  }

  img {
    width: 29.47vw;
    height: 66.6vh;
  }
}
</style>
