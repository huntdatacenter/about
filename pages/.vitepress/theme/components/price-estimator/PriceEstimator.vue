<script lang="ts">
import { defineComponent } from "vue"
import csvApi from "../../api/csv.js"

// Define the labCard interface for type safety
interface labCard {
  id: number
  title: string
  storage: number
  priceStorage: number
  priceComputeYearly: number
  priceComputeYearlyYearly: number
  numCompute: number
}

interface datasetCompute {
  id: number
  name: string
  flavor: string
  core_count: number
  ram: number
  type: string
  period: string
  monthlyPrice: number
  yearlyPrice: number
}
interface datasetStorage {}

export default defineComponent({
  props: {
    title: { type: String, default: "Title" },
  },

  data() {
    return {
      labCards: [] as labCard[], // Initialize an empty array for lab cards
      selectedDataSpaceSub: null,
      dataspaceSubscriptions: [
        // Predefined data space subscriptions
        { name: "Data space", subscription: "White (1 year)", label: "White (1 year)", units: 1, price: 0.0 },
        { name: "Data space", subscription: "White (3 years)", label: "White (3 years)", units: 1, price: 0.0 },
        { name: "Data space", subscription: "Orange (1 year)", label: "Orange (1 year)", units: 1, price: 8495.0 },
        { name: "Data space", subscription: "Orange (3 years)", label: "Orange (3 years)", units: 1, price: 29734.0 },
        { name: "Data space", subscription: "Blue (1 year)", label: "Blue (1 year)", units: 1, price: 35397.0 },
      ] as { name: string; subscription: string | null; label: string; units: number; price: number }[],
      // Initialization states and data storage for various price and machine data
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
      // Total price data
      totalCompute: { price: 0.0 },
      totalStorage: 0.0,
      totalStorageCost: 0.0,
      totalPriceItems: [],
      sumInTotal: 0.0,
      itemsComputeExport: [] as datasetCompute[],
      itemsStorageExport: [] as datasetStorage[],
    }
  },

  created() {
    // Initialize all data when the component is created
    this.initializeAll()
  },

  methods: {
    // Method to initialize all data
    initializeAll() {
      this.isInitializingComputePrices = true
      const getPriceList = csvApi.getPriceList()
      // Fetch and process compute prices
      getPriceList.then(json => {
        this.computePrices = json.filter(item => item["service.group"] === "cpu")
        this.computePrices = this.computePrices.map(this.preparePricesToYearly)
        this.isInitializingComputePrices = false
      })

      // Initialize available GPUs, machines, and storage prices
      this.initializeAvailableGpus()
      this.initializeMachines()

      getPriceList.then(json => {
        this.storagePrices = json.filter(item => item["service.family"] === "store")
        this.isInitializingStoragePrices = false
      })
      getPriceList.then(json => {
        this.gpuPrices = json.filter(item => item["service.group"] === "gpu")
        this.gpuPrices.map(this.preparePricesToYearly)
        this.isInitializingGpuPrices = false
      })
      getPriceList.then(json => {
        this.labPrices = json.filter(item => item["service.group"] === "lab")
        this.isInitializingLabPrices = false
      })
    },
    // Initialize available GPUs
    initializeAvailableGpus() {
      this.isInitializingAvailableGpus = true
      const uponGpus = csvApi.getAvailableGPUS()
      uponGpus.then(gpus => {
        this.availableGpus = gpus
        this.isInitializingAvailableGpus = false
      })
    },
    // Initialize available machines
    initializeMachines() {
      this.isInitializingMachines = true
      const machines = csvApi.getMachineFlavors()
      machines.then(machine => {
        this.machines = machine
        this.isInitializingMachines = false
      })
    },
    // Convert daily prices to yearly prices
    preparePricesToYearly(item: any) {
      if (item["service.commitment"] === "1D") {
        item["service.commitment"] = "1Y"
        item["price.nok.ex.vat"] = item["price.nok.ex.vat"] * 365
      }
      return item
    },

    // Add a new lab card
    addLabCard() {
      const newLabCard = {
        id: this.labCards.length + 1, // Assign a unique ID to the new lab card
        title: `Lab ${this.labCards.length + 1}`,
      }
      this.labCards.push(newLabCard)
      this.setPriceItems()
    },

    // Update the storage property of a lab card
    updateLabCardStorage(id, payload) {
      console.log(payload)
      const labCard = this.labCards.find(lab => lab.id === id)
      if (labCard) {
        labCard.storage = payload
        labCard.priceStorage = payload.price
      }
      this.totalStorage = this.labCards.reduce((total, lab) => total + lab.storage.size, 0)
      console.log("labCards:", this.labCards)
      this.totalStorageCost = this.labCards.reduce((total, lab) => total + lab.priceStorage, 0)
      this.itemsStorageExport[id] = payload.datasetStorage
      this.setPriceItems()
    },

    // Update the compute property of a lab card
    updateLabCardCompute(id, prices) {
      const labCard = this.labCards.find(lab => lab.id === id)
      if (labCard) {
        labCard.priceComputeYearly = parseFloat(prices.yearlyPrice)
        labCard.numCompute = parseFloat(prices.numCompute)
      }
      this.totalCompute.price = this.labCards.reduce((total, lab) => total + lab.priceComputeYearly, 0)
      /**
       * We need to handle that we can have multiple labs for the export. So make it an array of arrays.
       */
      this.itemsComputeExport[id] = prices.datasetCompute
      this.setPriceItems()
    },

    // Set the price items and calculate the total sum
    setPriceItems() {
      let priceItems: { name: string; subscription: string | null; units: number | string; price: number }[] = []
      if (this.labCards) {
        this.labCards.forEach(item => {
          priceItems.push({
            name: item.title,
            subscription: "1 Year",
            units: 1,
            price: this.labPrices[0]["price.nok.ex.vat"],
          })
        })
      }
      let numOfCompute = this.labCards.reduce((total, lab) => total + lab.numCompute, 0)
      priceItems.push({
        name: "Compute",
        subscription: null,
        units: numOfCompute || 0,
        price: this.totalCompute.price,
      })
      priceItems.push({
        name: "Storage",
        subscription: "Commitment",
        units: `${this.totalStorage} TB`,
        price: this.totalStorageCost,
      })
      this.totalPriceItems = priceItems
      this.sumInTotal = priceItems.reduce((total, item) => total + item.price, 0)
    },
    triggerFileUpload() {
      this.$refs.fileInput.click()
    },

    handleFileUpload(event) {
      const file = event.target.files[0]
      if (!file) {
        return
      }
    },
  },
})
</script>

<template>
  <v-container>
    <v-sheet class="group-slider-wrapper ma-auto pt-0" elevation="0" max-width="1120">
      <v-card-title>Price estimator for HUNT Cloud</v-card-title>
      <v-card-subtitle> This calculator gives a rough estimate of how much our services cost</v-card-subtitle>

      <!-- Subscription selection component (commented out) -->
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
        <v-row lex-direction="row-reverse" justify="space-between">
          <v-col cols="auto">
            <!-- Add a new lab card on button click -->
            <v-btn density="default" size="large" dark @click="addLabCard">Add lab</v-btn>
          </v-col>
          <v-col cols="auto">
            <input
              ref="fileInput"
              type="file"
              style="display: none"
              accept="application/json"
              @change="handleFileUpload"
            />
            <v-btn density="default" size="large" dark @click="triggerFileUpload">
              <v-icon left>mdi-import</v-icon>
              Import
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <!-- Loop through labCards array and render LabCard component -->
      <v-row>
        <v-col v-for="(lab, index) in labCards" :key="index" cols="12">
          <LabCard
            :key="lab.id"
            :title="lab.title"
            :compute-prices="computePrices"
            :gpu-prices="gpuPrices"
            :machines="machines"
            :available-gpus="availableGpus"
            :storage-prices="storagePrices"
            @updateStorage="updateLabCardStorage(lab.id, $event)"
            @updateCompute="updateLabCardCompute(lab.id, $event)"
          />
        </v-col>
      </v-row>
      <!-- Display total prices if there are lab cards -->
      <v-row v-if="labCards.length !== 0">
        <TotalBlock
          :total-items="totalPriceItems"
          :sum-in-total="sumInTotal"
          :itemsComputeExport="itemsComputeExport"
          :itemsStorageExport="itemsStorageExport"
        />
      </v-row>
    </v-sheet>
  </v-container>
</template>

<style scoped>
/* Add scoped styles if needed */
</style>
