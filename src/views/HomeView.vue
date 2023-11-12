<template>
  <section class="home">
    <about-me />
    <skill-list />
    <media-list />
    <my-career />
  </section>
</template>
<script>
import AboutMe from '@/components/aboutme/AboutMe.vue'
import SkillList from '@/components/skill/SkillList.vue'
import MediaList from '@/components/media/MediaList.vue'
import MyCareer from '@/components/career/MyCareer.vue'

export default {
  components: {
    AboutMe,
    SkillList,
    MediaList,
    MyCareer
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 0;
}
</style>