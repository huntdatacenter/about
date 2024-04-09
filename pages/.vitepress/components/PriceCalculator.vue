<script lang="ts">
import { defineComponent } from 'vue';

import csvApi from '../api/csv.js';
import { parse } from 'csv-parse';

export default defineComponent({
  props: {
    title: { type: String, default: "Title" },
  },
  data() {
    return {
      LabCards: [], // Initialize LabCards as an empty array
      selectedDataSpaceSub: null,
      dataspaceSubscriptions: [
        {
          name: "Data space",
          subscription: "White (1 year)",
          label: "White (1 year)",
          units: 1,
          price: 0.0,
        },
        {
          name: "Data space",
          subscription: "White (3 years)",
          label: "White (3 years)",
          units: 1,
          price: 0.0,
        },
        {
          name: "Data space",
          subscription: "Orange (1 year)",
          label: "Orange (1 year)",
          units: 1,
          price: 8495.0,
        },
        {
          name: "Data space",
          subscription: "Orange (3 years)",
          label: "Orange (3 years)",
          units: 1,
          price: 29734.0,
        },
        {
          name: "Data space",
          subscription: "Blue (1 year)",
          label: "Blue (1 year)",
          units: 1,
          price: 35397.0,
        },
      ],
      isInitializingComputePrices: false,
      computePrices: [],
      isInitializingStoragePrices: false,
      storagePrices: [],
      isInitializingGpuPrices: false,
      gpuPrices: [],
      

      items: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],
      value: ['foo', 'bar', 'fizz'],
      gbValues: ['10GB', '20GB', '30GB', '40GB', '50GB', '60GB', '70GB', '80GB', '90GB', '100GB']
    }
  },
  created() {
    this.initializeFlavors();
    this.initializeStoragePrices();
    this.initializeGpuPrices();
  },
  methods: {
    initializeFlavors() {
      this.isInitializingComputePrices = true;
      const uponFlavors = csvApi.getComputeFlavors();
      Promise.all(uponFlavors).then((responses) => {
        // console.log(responses);
        const records = [];
        const parser = parse({
          delimiter: [";"],
          trim: true,
          columns: true,
        });
        this.computePrices = records;
        this.isInitializingComputePrices = false;
        // console.log(records);
      });
    },
    initializeStoragePrices() {
      this.isInitializingStoragePrices = true;
      const uponStorage = csvApi.getStoragePrices();
      uponStorage.then((response) => {
        const records = parse(response.data, {
          delimiter: [";"],
          trim: true,
          columns: true,
        });
        this.storagePrices = records;
        this.isInitializingStoragePrices = false;
        // console.log(records);
      });
    },
    initializeGpuPrices() {
      this.isInitializingGpuPrices = true;
      const uponStorage = csvApi.getGpuPrices();
      uponStorage.then((response) => {
        const records = parse(response.data, {
          delimiter: [";"],
          trim: true,
          columns: true,
        });
        this.gpuPrices = records;
        this.isInitializingGpuPrices = false;
        // console.log(records);
      });
    },

    addLabCard() {
      // Add a new item to the LabCards array
      this.LabCards.push(this.LabCards.length + 1);
      console.log(this.LabCards);
      csvApi.getComputeFlavors()
    }
  },
})
</script>

<template>
  <v-sheet class="group-slider-wrapper ma-auto" elevation="0" max-width="920">
    <h3> Dataspace</h3>
    <v-select 
      v-model="selectedDataSpaceSub"
      :items="dataspaceSubscriptions" 
      item-title="label" 
      label="Choose a subscription"
      clearable
      >
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
