<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, default: "Title" },
  },
  data() {
    return {
      LabCards: [], // Initialize LabCards as an empty array
      subscriptions: [
        { name: 'Basic', price: 100 },
        { name: 'Pro', price: 200 },
        { name: 'Enterprise', price: 300 },
      ],
      items: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],
      value: ['foo', 'bar', 'fizz'],
      gbValues: ['10GB', '20GB', '30GB', '40GB', '50GB', '60GB', '70GB', '80GB', '90GB', '100GB']
    }
  },
  methods: {
    addLabCard() {
      // Add a new item to the LabCards array
      this.LabCards.push(this.LabCards.length + 1);
      console.log(this.LabCards);
    }
  },
})
</script>

<template>
  <v-sheet class="group-slider-wrapper ma-auto" elevation="0" max-width="920">
    <h3> Dataspace</h3>
    <v-select :items="subscriptions" item-title="name" label="Choose a subscription">
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props" :subtitle="item.raw.price"></v-list-item>
      </template>
    </v-select>
    <v-container>
      <v-row lex-direction="row-reverse">
        <v-col cols="auto">
          <!-- Call addLabCard method when button is clicked -->
          <v-btn density="default" size="large" dark @click="addLabCard">Add lab</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- Loop through LabCards array and render LabCard component -->
    <LabCard v-for="(lab, index) in LabCards" :key="index" :labName="index+1"/>
      
    <!-- Other components -->

    <div class="text-caption">GB</div>
    <v-slider show-ticks="always" step="100" tick-size="4"
      min="100"
      max="25000"
      thumb-size="24" thumb-label track-color="primary" multiple
    ></v-slider>
  </v-sheet>
</template>

<style scoped>
/* Add scoped styles if needed */
</style>
