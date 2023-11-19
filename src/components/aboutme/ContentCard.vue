<template>
  <v-card flat outlined class="about-me__card">
    <v-card-title class="about-me__title">
      {{ title }}
    </v-card-title>
    <v-card-text class="about-me__text">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>