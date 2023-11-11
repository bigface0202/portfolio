<template>
  <v-container class="about-me">
    <v-row>
      <v-col>
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
              Workout/Netflix/Car Driving/Hiking
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col>
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
          <v-card flat outlined class="about-me__card">
            <v-card-title class="about-me__title">
              Something
            </v-card-title>
            <v-card-text class="about-me__text">
              Something/Anything/Nothing
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col>
        <v-img class="about-me__icon" :src="require('@/assets/img/me.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/size.scss';

.about-me {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: $unit_size*4 0;
  margin: 0 auto;
  vertical-align: bottom;
  border-radius: $radius_size;
  &__card {
    height: 150px;
  }
  &__title {
    font-size: 2rem;
    margin-bottom: $unit_size * 2;
  }
  &__text {
    font-size: 1.5rem;
  }
  &__icon {
    // flex-grow: 0;
    width: 200px;
    height: 200px;
    margin: $unit_size*2;
    border-radius: 50%;
  }
}
</style>
