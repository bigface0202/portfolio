<template>
  <div id="app">
    <v-card class="media-card" 
            eleveted
            :href=media.url
            :target = "media.external ? '_blank' : ''"
            rel="noopener">
      <v-img :src="media.image" class="media-card__container__img" cover />
      <v-card-title class="media-card__title">
        {{ media.title }}
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    media: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/size.scss';
.media-card {
  margin: $unit_size * 2;
  width: 220px;
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
    font-size: 1.25rem;
  }
}
</style>
