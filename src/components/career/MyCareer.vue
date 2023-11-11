<template>
  <v-container>
    <my-time-line />
  </v-container>
</template>

<script>
import MyTimeLine from './MyTimeLine.vue'
export default {
  components: {
    MyTimeLine
  },
  computed: {

    timeline () {
      return this.$store.getters['tl/timeline']
    }

  }
}
</script>
