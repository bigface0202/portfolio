<template>
  <v-container class="media">
    <h2 class="media__title">Media</h2>
    <v-row md="3">
      <media-item v-for="md in media" :key="md.title + index" :media="md" />
    </v-row>
  </v-container>
</template>

<script>
import MediaItem from "./MediaItem.vue"
export default {
  components:{
    MediaItem
  },
  computed: {
    media () {
      return this.$store.getters['md/media']
    }
  }
}
</script>

<style lang="scss" scoped>
.media {
  padding-top: 50px;
  &__title {
    font-weight: normal;
  }
  &__contents {
    justify-content: center;
    margin-top: 20px;
    text-align: center;

    &-text {
      word-wrap: break-word;
    }
  }

  &__card {
    margin: 0;
    &__title {
      font-size: 1.5rem;
    }
  }
}
</style>