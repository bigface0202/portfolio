<template>
  <v-container class="about-me">
    <v-row class="about-me__row">
      <v-col class="about-me__row__col">
        <v-img class="about-me__row__col__img" :src="require('@/assets/img/me.jpg')" cover/>
      </v-col>
      <v-col class="about-me__row__col">
        <v-row>
          <content-card title="Name" text="Yusuke Enami" />
        </v-row>
        <v-row>
          <content-card title="Hobby" text="Workout/Netflix/CarDriving/Hiking" />
        </v-row>
        <v-row>
          <content-card title="Working at" text="Future Architect, inc." />
        </v-row>
        <v-row>
          <v-card flat>
            <v-card-title>Contact</v-card-title>
            <v-card-text>
              <v-row align="center" no-gutters>
                <v-btn class="text-none" variant="text" prepend-icon="mdi-twitter" href="https://twitter.com/bigface0202" target="_blank" rel="noopener">@bigface0202</v-btn>
              </v-row>
              <v-row align="center" no-gutters>
                <v-btn class="text-none" variant="text" prepend-icon="mdi-linkedin" href="https://www.linkedin.com/in/yusuke-kishishita-56197b181/" target="_blank" rel="noopener">Yusuke Kishishita</v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentCard from "./ContentCard.vue"
export default {
  components: {
    ContentCard
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/size.scss';

.about-me {
  padding-top: 30px;
  // padding: $unit_size*2 0;
  margin: 0 auto;
  &__row {
    justify-content: center;
    &__col {
      flex-grow: 0;
      margin: 0 5%;
      &__img {
        width: 150px;
        margin: $unit_size*2;
        border-radius: 50%;
        align-items: center;
      }
    }
  }
  &__text {
    font-size: 1.25rem;
    vertical-align: bottom;
  }
}
</style>
