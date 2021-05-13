<template>
  <section>
    <TipRightCard />
    <TipLeftCard />
    <TipRightCard />
  </section>
</template>

<script>
import TipRightCard from '@/components/cards/TipRightCard.vue';
import TipLeftCard from '@/components/cards/TipLeftCard.vue';

export default {
  components: {
    TipLeftCard,
    TipRightCard,
  },
  name: 'Tips',
};
</script>

<style lang="scss" scoped>
section {
  padding: 33vh 11.927vw;
  width: 100vw;
}
</style>
