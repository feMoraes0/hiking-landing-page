<template>
  <div class="background">
    <img class="sky" src="@/assets/images/background/HG.png" alt="background sky" />
    <img class="top-mountain" src="@/assets/images/background/MG.png" alt="mountain" />
    <img class="base-mountain" src="@/assets/images/background/VG.png" alt="base mountain" />
    <img class="sky-shadow" src="@/assets/images/background/BG-shadow.png" alt="sky shadow" />
    <img
      class="shadow-bottom"
      src="@/assets/images/background/BG-shadow-bottom.png"
      alt="sky shadow bottom"
    />
  </div>
</template>

<script>
export default {
  name: 'Background',
};
</script>

<style lang="scss" scoped>
.background {
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 0;

  img {
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;

    &.sky {
      z-index: 1;
    }

    &.top-mountain {
      margin-top: 42.96vh;
      z-index: 2;
    }

    &.base-mountain {
      margin-top: 71.11vh;
      z-index: 3;
    }

    &.sky-shadow {
      z-index: 4;
    }

    &.shadow-bottom {
      margin-top: 111.1vh;
      z-index: 4;
    }
  }
}
</style>
