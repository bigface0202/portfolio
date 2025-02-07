<template>
  <v-card class="media-card" 
          eleveted
          :href=media.url
          :target = "media.external ? '_blank' : ''"
          rel="noopener">
    <v-img :src="media.image" class="media-card__img" cover />
    <v-card-text class="media-card__title">{{ media.title }}</v-card-text>
  </v-card>
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
@use '@/assets/sass/size.scss' as *;
.media-card {
  margin: $unit_size * 2;
  width: 220px;
  &__img {
      height: 100px;
  }
  &__text {
    text-align: center;
    font-size: 1rem;
  }
}
</style>
