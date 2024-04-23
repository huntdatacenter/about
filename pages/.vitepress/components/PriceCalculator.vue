<script lang="ts">
import { defineComponent } from 'vue';

import csvApi from '../api/csv.js';
interface labCard {
  id: number;
  title: string;
  // Add more properties if needed
}

export default defineComponent({
  props: {
    title: { type: String, default: "Title" },
  },
  
  data() {
    return {
      LabCards: [] as labCard[],
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
      isInitializingMachines: false,
      machines: [],
      isInitializingAvailableGpus: false,
      availableGpus: [],
      

      items: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],
      value: ['foo', 'bar', 'fizz'],
      gbValues: ['10GB', '20GB', '30GB', '40GB', '50GB', '60GB', '70GB', '80GB', '90GB', '100GB']
    }
  },
  created() {
    this.initializeFlavors();
    this.initializeStoragePrices();
    this.initializeGpuPrices();
    this.initializeMachines();
    this.initializeAvailableGpus();
  },

  

  methods: {
    initializeFlavors() {
      this.isInitializingComputePrices = true;
      const uponFlavors = csvApi.getComputeFlavors();
      uponFlavors.then((flavors) => {
        this.computePrices = flavors.filter((item) => item['service.group'] === 'cpu');
        this.isInitializingComputePrices = false;
      });
    },
    initializeAvailableGpus() {
      this.isInitializingAvailableGpus = true;
      const uponGpus = csvApi.getAvailableGPUS();
      uponGpus.then((gpus) => {
        this.availableGpus = gpus;
        this.isInitializingAvailableGpus = false;
      });
    },
    initializeMachines() {
      this.isInitializingMachines = true;
      const machines = csvApi.getMachines();
      machines.then((machine) => {
        this.machines = machine;
        this.isInitializingMachines = false;
      });
    },
    initializeStoragePrices() {
      this.isInitializingStoragePrices = true;
      const uponStorage = csvApi.getStoragePrices();
      uponStorage.then((storage) => {
        this.storagePrices = storage.filter((item) => item['service.family'] === 'store');
        this.isInitializingStoragePrices = false;
      });
    },
    initializeGpuPrices() {
      this.isInitializingGpuPrices = true;
      const uponGpu = csvApi.getGpuPrices();
      uponGpu.then((gpu) => {
        this.gpuPrices = gpu.filter((item) => item['service.group'] === 'gpu');
        this.isInitializingGpuPrices = false;
      });
    },

    addLabCard() {
  // Add a new lab card with specific data
    const newLabCard = {
    id: this.LabCards.length + 1, // Assign a unique ID to the new lab card
    title: `Lab ${this.LabCards.length + 1}`,
    // Add more properties if needed
    };

    // Push the new lab card to the LabCards array
    this.LabCards.push(newLabCard);
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
    <v-row>
      <v-col v-for="(lab, index) in LabCards" :key="index" cols="12">
        <LabCard
          :key="lab.id"
          :title="lab.title"
          :compute-prices="computePrices"
          :gpu-prices="gpuPrices"
          :storage-prices="storagePrices"
          :machines="machines"
          :available-gpus="availableGpus"
        />
      </v-col>
    </v-row>
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
