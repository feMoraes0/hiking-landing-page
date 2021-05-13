<template>
  <section>
    <div>
      <p>a hiking guide</p>
      <h1>be prepared for the mountains and beyond!</h1>
      <button>scroll down</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
section {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  div {
    margin-top: 26.57vh;
    width: 49.48vw
  }

  p {
    align-items: center;
    color: #FBD784;
    display: flex;
    font-family: $gilroy-bold;
    font-size: 1.125rem;
    line-height: 1.625rem;
    margin-bottom: 32px;
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
    font-size: 5.5rem;
    line-height: 6.25rem;
    text-transform: capitalize;
  }

  button {
    background-color: transparent;
    border: none;
    color: $white-color;
    cursor: pointer;
    font-family: $gilroy-bold;
    font-size: 1.125rem;
    line-height: 1.375rem;
    margin-top: 33px;
  }
}
</style>
