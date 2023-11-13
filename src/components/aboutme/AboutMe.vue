<template>
  <v-row class="about-me">
    <v-col class="about-me__col">
      <v-img class="about-me__col__img" :src="require('@/assets/img/me.jpg')" />
    </v-col>
    <v-col class="about-me__col">
      <v-row>
        <v-card flat outlined class="about-me__card">
          <v-card-title class="about-me__title">
            Name
          </v-card-title>
          <v-card-text class="about-me__text">
            Yusuke Enami<br>
            (Yusuke Kishishita)
          </v-card-text>
        </v-card>
      </v-row>
      <v-row>
        <v-card flat outlined class="about-me__card">
          <v-card-title class="about-me__title">
            Hobby
          </v-card-title>
          <v-card-text class="about-me__text">
            Workout/Netflix/CarDriving/Hiking
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
    <v-col class="about-me__col">
      <v-row>
        <v-card flat outlined class="about-me__card">
          <v-card-title class="about-me__title">
            Working at
          </v-card-title>
          <v-card-text class="about-me__text">
            Future Architect, inc.
          </v-card-text>
        </v-card>
      </v-row>
      <v-row>
        <v-card flat class="about-me__card">
          <v-card-title class="about-me__title">
            Contact
          </v-card-title>
          <v-card-text class="about-me__text">
            <v-card flat title="@bigface0202" prepend-icon="mdi-twitter" href="https://twitter.com/bigface0202" target="_blank" rel="noopener"/>
            <v-card flat title="Yusuke Kishishita" prepend-icon="mdi-linkedin" href="https://www.linkedin.com/in/yusuke-kishishita-56197b181/" target="_blank" rel="noopener"/>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/size.scss';

.about-me {
  padding-top: 30px;
  // padding: $unit_size*2 0;
  margin: 0 auto;
  &__col {
    // display: flex;
    align-items: center;
    &__img {
      height: 250px;
      width: 250px;
      margin: $unit_size*2;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &__card {
    height: 200px;
  }
  &__title {
    font-size: 1.25rem;
    margin-bottom: $unit_size * 2;
  }
  &__text {
    font-size: 1.25rem;
    vertical-align: bottom;
  }
}
</style>
