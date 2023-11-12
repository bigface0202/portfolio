<template>
  <v-container>
    <div class="skill__title">Skills</div>
    <v-row md="3">
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