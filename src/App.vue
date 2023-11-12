<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
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