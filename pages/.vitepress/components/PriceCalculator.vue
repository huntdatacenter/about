<script lang="ts">
import { defineComponent } from "vue"

import csvApi from "../api/csv.js"
interface labCard {
  id: number
  title: string
  // Add more properties if needed
  storage: number
  priceComputeYearlyMonthly: number
  priceComputeYearlyYearly: number
  numCompute: number
}

export default defineComponent({
  props: {
    title: { type: String, default: "Title" },
  },

  data() {
    return {
      labCards: [] as labCard[],
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
      ] as { name: string, subscription: string | null, label: string, units: number, price: number }[],
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

      labPrices: [],

      totalCompute: {
        price: 0.0,
      },
      totalStorage: 0.0,
      totalPriceItems: [],
      sumInTotal: 0.0,

    

      selectedRadio: "1Y",

      // Unsure about this yet. Did we agree on radio buttons, or shall i display 1 Month and 1 year prices. Anyway
    }
  },
  created() {
    this.initializeAll()
  },

  methods: {
    initializeAll() {
      this.isInitializingComputePrices = true
      const getPriceList = csvApi.getComputeFlavors()
      getPriceList.then(json => {
        this.computePrices = json.filter(item => item["service.group"] === "cpu")
        this.computePrices = this.computePrices.map(this.preparePricesToYearly)
        this.isInitializingComputePrices = false
      })
      //GPUS
      this.initializeAvailableGpus()
      //MACHINES
      this.initializeMachines()
      //STORAGE
      getPriceList.then(json => {
        this.storagePrices = json.filter(item => item["service.family"] === "store")
        this.isInitializingStoragePrices = false
        console.log(this.storagePrices)
      })
      //GPUS
      getPriceList.then(json => {
        this.gpuPrices = json.filter(item => item["service.group"] === "gpu")
        this.gpuPrices.map(this.preparePricesToYearly)
        this.isInitializingGpuPrices = false
      })
      //LabPrice
      getPriceList.then(json =>{
        this.labPrices = json.filter(item => item["service.group"] === "lab")
        this.isInitializingLabPrices = false
      })
      
    },
    initializeAvailableGpus() {
      this.isInitializingAvailableGpus = true
      const uponGpus = csvApi.getAvailableGPUS()
      uponGpus.then(gpus => {
        this.availableGpus = gpus
        this.isInitializingAvailableGpus = false
      })
    },
    initializeMachines() {
      this.isInitializingMachines = true
      const machines = csvApi.getMachines()
      machines.then(machine => {
        this.machines = machine
        this.isInitializingMachines = false
      })
    },
    preparePricesToYearly(item: any ){
        /*
        *This function will change all items which have the service.commitment as 1D to 1Y by multiplying with 365 and renaming the service.commitment to 1Y
        */
        // If the item is a commitment of 1 day or 1 month, delete it. If time, implement this
        if (item["service.commitment"] === "1D") {
            item["service.commitment"] = "1Y"
            item["price.nok.ex.vat"] = item["price.nok.ex.vat"] * 365
        }
        return item
    },

    addLabCard() {
      // Add a new lab card with specific data
      const newLabCard = {
        id: this.labCards.length + 1, // Assign a unique ID to the new lab card
        title: `Lab ${this.labCards.length + 1}`,
        // Add more properties if needed
      }
      // Push the new lab card to the labCards array
      this.labCards.push(newLabCard)
      console.log(this.labCards)
      this.setPriceItems()
    },

    updateLabCardStorage(id, storage) {
      // Find the lab card with the specific ID
      const labCard = this.labCards.find(lab => lab.id === id)
      // Update the storage property of the lab card
      if (labCard) {
        labCard.storage = storage
      }
      this.totalStorage = this.labCards.reduce((total, lab) => total + lab.storage.size, 0).toFixed(2)
      this.setPriceItems()
    },
    updateLabCardCompute(id, prices) {
      // Find the lab card with the specific ID
      const labCard = this.labCards.find(lab => lab.id === id)
      // Update the storage property of the lab card
      if (labCard) {
        labCard.priceComputeYearly = parseFloat(prices.yearlyPrice)
        labCard.numCompute = parseFloat(prices.numCompute)
      }
      //Updating the total amout of compute
      this.totalCompute.price = this.labCards.reduce((total, lab) => total + lab.priceComputeYearly, 0)
      this.setPriceItems();
    },
    storageCost(totalSize, level1, level2, level3) {
      // Different equation used if total size is below 10 TB / 10 < totalSize <= 100 / above 100 TB
      let price
      totalSize = totalSize * 1024 // Convert TB to GB
      if (totalSize <= 10000) {
        price = level1 * totalSize
      } else if (totalSize > 10000 && totalSize <= 100000) {
        price = level1 * 10000 + level2 * (totalSize - 10000)
      } else if (totalSize > 100000) {
        price = level1 * 10000 + level2 * 90000 + level3 * (totalSize - 100000)
      }
      return price
    },

    setPriceItems() {
      let priceItems: { name: string, subscription: string | null, units: number | string, price: number }[] = []
      if (this.labCards) {
        this.labCards.forEach(item => {
          priceItems.push({
            name: item.title,
            subscription: "1 Year",
            units: 1,
            price: this.labPrices[0]['price.nok.ex.vat'],
          });
        }); 
      }
      let numOfCompute = this.labCards.reduce((total, lab) => total + lab.numCompute, 0)
      priceItems.push({
        name: "Compute",
        subscription: null,
        units: numOfCompute || 0, 
        price: this.totalCompute.price,
      })
      console.log(this.totalStorage)
      let storagePrice = this.storageCost(this.totalStorage, 0.1, 0.05, 0.01)
      priceItems.push({
        name: "Storage",
        subscription: "Commitment",
        units: `${this.totalStorage} TB`,
        price: storagePrice,
      })
      this.totalPriceItems = priceItems
      this.sumInTotal = priceItems.reduce((total, item) => total + item.price, 0)
      
    },
  },
})
</script>

<template>
  <v-sheet class="group-slider-wrapper ma-auto" elevation="0" max-width="1120">
    <v-card-title>Price calculator for HUNT Cloud</v-card-title>
    <v-card-subtitle> This calculator gives a rough estimate of how much our services cost</v-card-subtitle>
    <!-- <v-select
      v-model="selectedDataSpaceSub"
      :items="dataspaceSubscriptions"
      item-title="label"
      label="Choose a subscription"
      clearable
      @update:model-value="setPriceItems"
    >
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props" :subtitle="item.raw.price"></v-list-item>
      </template>
    </v-select> -->

    <v-container>
      <v-row lex-direction="row-reverse">
        <v-col cols="auto">
          <!-- Call addLabCard method when button is clicked -->
          <v-btn density="default" size="large" dark @click="addLabCard">Add lab</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- Loop through labCards array and render LabCard component -->
    <v-row>
      <v-col v-for="(lab, index) in labCards" :key="index" cols="12">
        <LabCard
          :key="lab.id"
          :title="lab.title"
          :selected-radio="selectedRadio"
          :compute-prices="computePrices"
          :gpu-prices="gpuPrices"
          :machines="machines"
          :available-gpus="availableGpus"
          @updateStorage="updateLabCardStorage(lab.id, $event)"
          @updateCompute="updateLabCardCompute(lab.id, $event)"
        />
      </v-col>
    </v-row>
    <v-row v-if="labCards.length !== 0">
      <TotalBlock :total-items="totalPriceItems" :sum-in-total="sumInTotal" />
    </v-row>
  </v-sheet>
</template>

<style scoped>
/* Add scoped styles if needed */
</style>
