<template>
  <v-app class="portfolio">
    <v-main>
      <app-header class="portfolio__header" />
      <about-me id="me" />
      <v-divider />
      <skill-list id="skill" />
      <v-divider />
      <media-list id="media" />
      <v-divider />
      <my-career id="career" />
      <v-divider />
      <papers-list id="paper" />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue"
import AboutMe from '@/components/aboutme/AboutMe.vue'
import SkillList from '@/components/skill/SkillList.vue'
import MediaList from '@/components/media/MediaList.vue'
import MyCareer from '@/components/career/MyCareer.vue'
import PapersList from '@/components/papers/PapersList.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AboutMe,
    SkillList,
    MediaList,
    MyCareer,
    PapersList
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/size.scss';

.portfolio {
  height: 100%;
  margin: 0 15%;
  &__header{
    z-index: 1;
    top:0;
    position: sticky;
  }
}

#app {
  font-family: 'Noto Sans JP', 'Avenir', Helvetica, Arial, sans-serif;
  // width: 1600px;
  // margin: 50px;
}

</style>