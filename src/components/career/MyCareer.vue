<template>
  <v-container class="career">
    <h2 class="career__title">Career</h2>
    <v-timeline class="career__timeline" side="end">
      <v-timeline-item class="career__timeline__item" v-for="tl in timeline" :key="tl.id" :timeline="tl" v-bind:dot-color="tl.color" v-bind:icon="tl.icon">
        <v-card class="career__timeline__item__card">
          <v-card-title v-bind:class="tl.color">
            {{ tl.year }}
          </v-card-title>
          <v-container>
            <v-row>
              <v-col md="12">{{ tl.org }} : {{ tl.desc }}</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  computed: {
    timeline () {
      return this.$store.getters['tl/timeline']
    }
  },
  methods: {
    isRight (side) {
      if (side === 'right') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@use '@/assets/sass/size.scss' as *;

.career {
  padding: 50px 0;
  &__title {
    font-weight: normal;
  }
  &__timeline {
    margin-top: 20px;
    &__item {
      &__card {
        width: 220px;
      }
    }
  }
}
</style>