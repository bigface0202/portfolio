<template>
  <v-container class="career">
    <div class="career__title">Career</div>
    <v-timeline>
      <v-timeline-item v-for="tl in timeline" :key="tl.id" :timeline="tl" v-bind:dot-color="tl.color">
        <v-card>
          <v-card-title v-bind:class="tl.color">
            <v-icon dark size="32" class="mr-4">{{ tl.icon }}</v-icon>
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
@import '@/assets/sass/size.scss';

.career {
  &__title {
    font-size: 2rem;
    margin-bottom: $unit_size * 2;
  }
}
</style>