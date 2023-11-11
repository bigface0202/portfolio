<template>
  <div id="app">
    <v-card class="skill-card" eleveted>
      <v-avater class="skill-card__container">
        <v-img :src="image" class="skill-card__container__img"/>
      </v-avater>
      <v-card-title class="skill-card__title">{{ title }}</v-card-title>
      <v-card-text class="skill-card__text">{{ years }}</v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['title', 'years', 'image']
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/size.scss';
.skill-card {
  margin: $unit_size * 2;
  width: 200px;
  &__title {
    font-size: 1.5rem;
    text-align: left;
  }
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    &__img {
      width: 100px;
      height: 100px;
    }
  }
  &__title {
    text-align: center;
    font-size: 1.5rem;
  }
  &__text {
    text-align: center;
    font-size: 1rem;
  }
}
</style>
