<template>
  <section class="papers">
    <!-- <paper-filter class="papers__filter" @change-filter="setFilters" /> -->
    <h2 class="papers__title">Publications</h2>
    <ul class="papers__item">
      <div class="paper__item__content" v-if="activeFilters.paper" flat>
        <h3 class="papers__item__content__title">Journal Paper</h3>
        <paper-item v-for="paper in journalPapers" :key="paper.id" :paper="paper" />
      </div>
      <div class="paper__item__content" v-if="activeFilters.conf_i" flat>
        <h3 class="papers__item__content__title">International Conference</h3>
        <paper-item v-for="paper in iConferencePapers" :key="paper.id" :paper="paper" />
      </div>
      <div class="paper__item__content" v-if="activeFilters.conf_j" flat>
        <h3 class="papers__item__content__title">Domestic Conference</h3>
        <paper-item v-for="paper in dConferencePapers" :key="paper.id" :paper="paper" />
      </div>
    </ul>
  </section>
</template>

<script>
import PaperItem from './PaperItem.vue'
// import PublicationFilter from '@/components/mypapers/filter.vue'

export default {
  components: {
    PaperItem
    // PublicationFilter
  },
  data () {
    return {
      activeFilters: {
        paper: true,
        conf_i: true,
        conf_j: true
      }
    }
  },
  computed: {
    journalPapers () {
      const papers = this.$store.getters['pp/papers']
      return papers.filter(paper => {
        if (this.activeFilters.paper && paper.type.includes('paper')) {
          return true
        }
        return false
      })
    },
    iConferencePapers () {
      const papers = this.$store.getters['pp/papers']
      return papers.filter(paper => {
        if (this.activeFilters.conf_i && paper.type.includes('conf_i')) {
          return true
        }
        return false
      })
    },
    dConferencePapers () {
      const papers = this.$store.getters['pp/papers']
      return papers.filter(paper => {
        if (this.activeFilters.conf_j && paper.type.includes('conf_j')) {
          return true
        }
        return false
      })
    }
  },
  methods: {
    setFilters (updatedFilters) {
      this.activeFilters = updatedFilters
    }
  }
}
</script>

<style lang="scss" scoped>

.papers {
  width: 100%;
  padding-top: 50px;
  &__title {
    font-weight: normal;
  }
  &__item {
    padding: 0;
    margin: 2rem auto;
    list-style: none;
    &__content {
      &__title {
        font-weight: normal;
      }
    }
  }
  &__filter {
    width: 100%;
  }
  &__content {
    width: 100%;
  }
}
</style>
