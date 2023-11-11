<template>
  <v-container>
    <div class="publication__title">Publications</div>
    <v-row>
      <v-col md="3">
        <v-card class="publication__card" eleveted>
          <img src="@/assets/img/google_cloud.png" class="img-fluid" />
          <v-card-title class="justify-center">Medium</v-card-title>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="publication__card" eleveted>
          <img src="@/assets/img/kubernetes.png" class="img-fluid" />
          <v-card-title class="justify-center">Future Tech Blog</v-card-title>
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
.publication {
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