<template>
  <v-card class="skill-card" eleveted :title="skill.title" :prepend-icon="skill.icon">
    <v-card-text class="skill-card__text">{{ skill.years }}</v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/size.scss';
.skill-card {
  margin: $unit_size * 2;
  width: 220px;
  &__title {
    font-size: 1.5rem;
    text-align: left;
  }
  &__text {
    text-align: center;
    font-size: 1rem;
  }
}
</style>
