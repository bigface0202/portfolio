<template>
  <v-container>
    <div class="skill__title">Skills</div>
    <v-row>
      <v-col md="3">
        <v-card class="skill__card" eleveted>
          <img src="@/assets/img/google_cloud.png" class="img-fluid" />
          <v-card-title class="justify-center">Google Cloud</v-card-title>
          <v-card-text class=text-center>2 years</v-card-text>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="skill__card" eleveted>
          <img src="@/assets/img/kubernetes.png" class="img-fluid" />
          <v-card-title class="justify-center">Kubernetes</v-card-title>
          <v-card-text class=text-center>2 years</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
.skill {
  &__title {
    font-size: 2rem;
    text-align: left;
  }

  &__contents {
    justify-content: center;
    margin-top: 20px;
    text-align: center;

    &-text {
      word-wrap: break-word;
    }
  }

  &__card {
    margin: 0;
  }
}
</style>