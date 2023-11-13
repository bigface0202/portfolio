<template>
  <section class="home">
    <about-me id="me" />
    <v-divider />
    <skill-list id="skill" />
    <v-divider />
    <media-list id="media" />
    <v-divider />
    <my-career id="career" />
    <v-divider />
    <papers-list id="paper" />
  </section>
</template>
<script>
import AboutMe from '@/components/aboutme/AboutMe.vue'
import SkillList from '@/components/skill/SkillList.vue'
import MediaList from '@/components/media/MediaList.vue'
import MyCareer from '@/components/career/MyCareer.vue'
import PapersList from '@/components/papers/PapersList.vue'

export default {
  components: {
    AboutMe,
    SkillList,
    MediaList,
    MyCareer,
    PapersList
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 0;
}
</style>