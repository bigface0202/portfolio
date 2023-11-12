<template>
  <nav class="header">
    <ul class="header__list">
      <li class="header__list__items" v-for="navItem in navItems" :key="navItem.name">
        <a class="header__list__items--url" :href="navItem.url" v-if="!navItem.children">{{ navItem.name }}</a>
        <span class ="header__list__items__vertical" v-else v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave">{{ navItem.name }}
          <ul class="header__list__items__vertical__nav" :class="{ isOpen }">
            <v-btn class="header__list__items__vertical__nav__items" v-for="child in navItem.children" :key=child.name flat :href="child.url" :target = "child.external ? '_blank' : ''">
              {{ child.name }}
            </v-btn> 
          </ul>
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
import constants from './constants.js'

export default {
  data: () => ({
    drawer: false,
    navItems: constants.navItems,
    isOpen: false,
    activeItem: ''
  }),
  methods: {
    mouseOver () {
      this.isOpen = true
      return this.isOpen
    },
    mouseLeave () {
      this.isOpen = false
      return this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  background-color: #fff;
  &__list {
    display: flex;
    margin: 0;
    // color: $concept_color;
    list-style-type: none;
    // background-color: $concept_lighten_color !important;
    &__items {
      margin: 0 20px;
      &--url {
        display: block;
        height: auto;
        padding: 20px;
        // color: $concept_color;
        text-decoration: none;
      }
      &__vertical {
        position: relative;
        z-index: 1;
        display: block;
        height: auto;
        padding: 20px;
        text-decoration: none;
        &__nav {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          padding: 0;
          list-style-type: none;
          // background-color: $concept_color;
          &__items {
            width: 170px;
            border-bottom: 1px solid $concept_lighten_color;
          }
        }
      }
    }
  }
}

.isOpen {
  display: block;
}

.selected{
  background-color: #00f;
  color:#fff;
}

</style>
