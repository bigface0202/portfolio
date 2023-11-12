<template>
  <v-app>
    <v-main>
      <about-me />
      <skill-list />
      <media-list />
      <my-career />
    </v-main>
  </v-app>
</template>

<script>
import AboutMe from '@/components/aboutme/AboutMe.vue'
import SkillList from '@/components/skill/SkillList.vue'
import MediaList from '@/components/media/MediaList.vue'
import MyCareer from '@/components/career/MyCareer.vue'

export default {
  name: 'App',

  components: {
    AboutMe,
    SkillList,
    MediaList,
    MyCareer
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/size.scss';

#app {
  // font-family: 'Noto Sans JP', 'Avenir', Helvetica, Arial, sans-serif;
  // width: 1600px;
  // margin: 50px;
}

</style>