<template>
  <section class="home">
    <papers-list />
  </section>
</template>
<script>
import PapersList from '@/components/papers/PapersList.vue'

export default {
  components: {
    PapersList
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 0;
}
</style>