<template>
  <v-container class="skill">
    <h2 class="skill__title">Skills</h2>
    <v-row class="skill__contents">
      <skill-item v-for="skill in skills" :key="skill.title + index" :skill="skill" />
    </v-row>
  </v-container>
</template>

<script>
import SkillItem from './SkillItem.vue'
export default {
  components: {
    SkillItem
  },
  computed: {
    skills () {
      return this.$store.getters['sk/skills']
    }
  }
}
</script>
<style lang="scss" scoped>
.skill {
  padding-top: 50px;
  &__title {
    font-weight: normal;
  }
  &__contents {
    justify-content: center;
    margin-top: 20px;
    text-align: center;
    &-text {
      word-wrap: break-word;
    }
  }
}
</style>