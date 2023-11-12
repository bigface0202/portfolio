<template>
  <div id="app">
    <v-card class="media-card" 
            eleveted
            :href="url"
            target="_blank"
            rel="noopener">
      <v-img :src="image" class="media-card__container__img" cover />
      <v-card-title class="media-card__title">
        {{ title }}
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['title', 'image', 'url']
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/size.scss';
.media-card {
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
