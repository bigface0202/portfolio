<template>
  <v-container class="publication">
    <div class="publication__title">Publications</div>
    <v-row md="3">
      <media-item v-for="md in media" :key="md.title + index" :title="md.title" :url="md.url" :image="md.image" />
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
.publication {
  &__title {
    font-size: 2rem;
    text-align: left;
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