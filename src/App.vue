<template>
  <v-app>
    <v-main>
      <app-header />
      <router-view />
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

#app {
  // font-family: 'Noto Sans JP', 'Avenir', Helvetica, Arial, sans-serif;
  // width: 1600px;
  // margin: 50px;
}

</style>