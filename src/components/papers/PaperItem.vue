<template>
  <div class="mypapers-item">
    <li class="mypapers-item__list">
      <div class="mypapers-item__text">
        <h3 class="mypapers-item__title">{{ paper.title }}</h3>
        <h4 class="mypapers-item__authors">{{ paper.authors }}</h4>
        <p class="mypapers-item__text">{{ paper.publisher }}</p>
        <p class="mypapers-item__text">{{ paper.year }}</p>
        <p class="mypapers-item__text">{{ paper.doi }}</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    paper: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';
@import '@/assets/sass/size.scss';

.mypapers-item {
  &__list {
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid $black_color;
    border-radius: $radius_size;
  }
  &__title {
    font-weight: normal;
  }
  &__authors {
    font-weight: normal;
  }
  &__text {
    font-size: 0.9rem;
  }
  &__badge {
    margin-top: $unit_size;
    text-align: right;
  }
}

</style>
