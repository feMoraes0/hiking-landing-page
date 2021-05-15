<template>
  <section>
    <TipRightCard>
      <div class="text-content">
        <p>Get Started</p>
        <h1>What level of hiker are you?</h1>
        <span>
          Determining what level of hiker you are can be an important tool when planning
          future hikes. This hiking level guide will help you plan hikes according to
          different hike ratings set by various websites like All Trails and Modern Hiker.
          What type of hiker are you – novice, moderate, advanced moderate, expert, or
          expert backpacker?
        </span>
        <button>
          read more
          <img src="@/assets/icons/arrow-downward-gold.svg" />
        </button>
      </div>
      <img src="@/assets/images/tips/level.png" alt="gear">
    </TipRightCard>
    <TipLeftCard>
      <img src="@/assets/images/tips/gear.png" alt="gear">
      <div class="content">
        <p>Hiking essentials</p>
        <h1>Picking the right Hiking Gear!</h1>
        <span>
          The nice thing about beginning hiking is that you don’t really need any special
          gear, you can probably get away with things you already have. Let’s start with clothing.
          A typical mistake hiking beginners make is wearing jeans and regular clothes, which will
          get heavy and chafe wif they get sweaty or wet.
        </span>
        <button>
          read more
          <img src="@/assets/icons/arrow-downward-gold.svg" />
        </button>
      </div>
    </TipLeftCard>
    <TipRightCard>
      <div class="text-content">
        <p>where you go is the key</p>
        <h1>Undestand your map & timing</h1>
        <span>
          To start, print out the hiking guide and map. If it’s raining, throw them in a
          Zip-Lock bag. Read over the guide, study the map, and have a good idea of what
          to expect. I like to know what my next landmark is as I hike. For example, I’ll
          read the guide and know that say, in a mile, I make a right turn at the junction..
        </span>
        <button>
          read more
          <img src="@/assets/icons/arrow-downward-gold.svg" />
        </button>
      </div>
      <img src="@/assets/images/tips/map.png" alt="gear">
    </TipRightCard>
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
  padding: 33vh 11.927vw 0 11.927vw;
  width: 100vw;
}
</style>
