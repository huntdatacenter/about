<script lang="ts">

// Test URL: http://localhost:5173/price-calculator

// Data: https://assets.hdc.ntnu.no/assets/prices/v4/hunt-cloud-price-list-4-0.csv

// Old calculator: https://docs.hdc.ntnu.no/administer-science/prices/calculator/

export default {
  // name: 'PriceCalculator',
  props: {
    title: { type: String, required: true, default: "Title" },
  },
  data() {
    return {
      // item: null,
    }
  },
  mounted() {
    console.log('mounted')
  },
  computed: {
    // TODO
  },
}
</script>

<template>
  <v-sheet
    class="group-slider-wrapper ma-auto"
    elevation="0"
    max-width="920"
  >
    <v-card class="ma-6">
      <v-card-title>Price Calculator</v-card-title>
      <v-card-text>
        Here go buttons!
        <br />
        <v-img
          max-width="200"
          max-height="200"
          src="/img/robot-2-square-250.png"
        ></v-img>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>
