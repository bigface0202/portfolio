<template>
  <header class="header">
    <v-btn class="header__btn" :class="{ open: menuOpen }" v-show="buttonShow" icon="mdi-menu" @click="clicked()" flat></v-btn>
    <nav class="header__nav" :class="{ 'sp-menu': buttonShow }" v-show="menuOpen">
      <ul class="header__nav__list" :class="{ open: menuOpen }">
        <li class="header__nav__list__items" v-for="navItem in navItems" :key="navItem.name">
          <a class="header__nav__list__items--url" :href="navItem.url">{{ navItem.name }}</a>
          <!-- <a class ="header__nav__list__items__vertical" :href="navItem.url" v-else v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave">{{ navItem.name }}
            <ul class="header__nav__list__items__vertical__nav" :class="{ isOpen }">
              <v-btn class="header__nav__list__items__vertical__nav__items" v-for="child in navItem.children" :key=child.name flat :href="child.url" :target = "child.external ? '_blank' : ''">
                {{ child.name }}
              </v-btn> 
            </ul>
          </a> -->
          <v-divider />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import constants from './constants.js'

export default {
  created () {
    window.addEventListener("resize", this.getWindowWidth)
  },
  beforeUnmount () {
    window.removeEventListener("resize", this.getWindowWidth)
  },
  mounted: function () {
    this.getWindowWidth()
  },
  data: () => ({
    drawer: false,
    navItems: constants.navItems,
    isOpen: false,
    activeItem: '',
    windowWidth: '',
    menuOpen: false,
    buttonShow: false
  }),
  methods: {
    mouseOver () {
      this.isOpen = true
      return this.isOpen
    },
    mouseLeave () {
      this.isOpen = false
      return this.isOpen
    },
    clicked () {
      this.menuOpen = !this.menuOpen
    },
    getWindowWidth ($event) {
      this.windowWidth = window.innerWidth
      this.menuOpen = this.windowWidth >= 768
      this.buttonShow = this.windowWidth < 768
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';

.header {
  a:link { color: #000000; }
  a:visited { color: #000000; }
  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    background-color: #fff;
    &.sp-menu {
      position: fixed;
      top: 0;
      right: 0;
      // padding: 10px;
      width: calc(100% - 200px);
      height: calc(100vh - 300px);
      // color: #fff;
      background: #fff;
    }
    &.sp-menu & {
      &__list {
        display: flex;
        flex-direction: column;
        & > * + * {
          margin-top: 1rem;
        }
      }
    }
    &__list {
      display: flex;
      margin: 0;
      list-style-type: none;
      &__items {
        margin: 0 10px;
        &--url {
          display: block;
          height: auto;
          padding: 10px 20px;
          text-decoration: none;
        }
        &__vertical {
          position: relative;
          z-index: 1;
          display: block;
          height: auto;
          padding: 10px 20px;
          text-decoration: none;
          &__nav {
            position: absolute;
            top: 100%;
            left: 0;
            display: none;
            padding: 0;
            list-style-type: none;
            &__items {
              width: 170px;
              border-bottom: 1px solid $concept_lighten_color;
            }
          }
        }
      }
    }
  }
  &__btn {
    appearance: none;
    position: fixed;
    top: calc((3.8rem - 44px) / 2);
    right: 15px;
    display: inline-block;
    width: 50px;
    height: 44px;
    background: none;
    border: none;
    z-index: 10;
    cursor: pointer;
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
