<template>
  <v-app class="portfolio">
    <v-main>
      <app-header class="portfolio__header" />
      <router-view class="portfolio__view"/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue"
export default {
  name: 'App',
  components: {
    AppHeader
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