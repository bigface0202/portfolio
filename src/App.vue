<template>
  <v-app class="portfolio">
    <app-header class="portfolio__header" />
    <about-me id="me" class="portfolio__section" />
    <v-divider />
    <skill-list id="skill" class="portfolio__section" />
    <v-divider />
    <media-list id="media" class="portfolio__section" />
    <v-divider />
    <my-career id="career" class="portfolio__section" />
    <v-divider />
    <papers-list id="paper" class="portfolio__section" />
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
html, body {
  // height:100vh;
  // width: 100vw;
}

.portfolio {
  // height: 100vh;
  // width: 100vw;
  &__header{
    z-index: 1;
    top:0;
    position: sticky;
  }
}

#app {
  font-family: 'Noto Sans JP', 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0 10%;
}

</style>