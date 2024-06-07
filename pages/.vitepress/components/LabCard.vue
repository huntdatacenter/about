<script lang="ts">
export default {
  name: "LabCard",
  props: {
    title: { type: String, required: true, default: "Lab " },
    computePrices: { type: Array, default: () => [] },
    gpuPrices: { type: Array, default: () => [] },
    storagePrices: { type: Array, default: () => [] },
    machines: { type: Array, default: () => [] },
    availableGpus: { type: Array, default: () => [] },
  },
  data() {
    return {
      computeId: 0,
      isComputeModalOpen: false,
      datasetCompute: [],
      selectedCompute: [],
      isInitializingComputePrices: false,
      computeHeaders: [
        { title: "Name", align: "start", sortable: true, key: "name" },
        { title: "Machine type", align: "start", sortable: true, key: "flavor" },
        { title: "cpu cores", align: "start", sortable: true, key: "core_count" },
        { title: "Memory [GB]", align: "start", sortable: true, key: "ram" },
        { title: "Type", align: "start", sortable: true, key: "type" },
        { title: "Period", align: "start", sortable: true, key: "period" },
        { title: "Price", align: "start", sortable: true, key: "price", },
      ],
      totalPriceItems: 0.0,
      priceHeaders: [
        { title: "Name", key: "name" },
        { title: "Price", key: "price" },
      ],
    }
  },

  methods: {
    addMachine() {
      this.isComputeModalOpen = true
    },
    closeComputeModal(payload: any) {
      console.log(payload)
      if (payload) {
        this.computeId = this.computeId + 1
        this.datasetCompute.push(payload)
      }
      this.isComputeModalOpen = false
    },
    removeSelected() {
        this.datasetCompute = this.datasetCompute.filter((item) => !this.selectedCompute.includes(item))
        this.selectedCompute = []
    },
    updateSelected(items: any) {
      this.selectedCompute = items;
      console.log(this.selectedCompute)
    }
  },
  created() {},
}
</script>

<template>
  <v-sheet class="lab-card">
    <v-card class="ma-0">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>Add a machine</v-card-subtitle>

      <v-col cols="auto">
        <v-btn icon="mdi-plus" size="small" @click="addMachine"></v-btn>
      </v-col>
      <Machine
        v-if="isComputeModalOpen"
        :compute-id="computeId"
        :flavors="computePrices"
        :gpus="gpuPrices"
        :machines="machines"
        :available-gpus="availableGpus"
        @close="closeComputeModal"
      />

      <v-card class="mb-6" elevation="1" dense>
        <v-data-table-virtual
          v-model="selectedCompute"
          :items="datasetCompute"
          :headers="computeHeaders"
          :loading="isInitializingComputePrices"
          show-select
          hover
          hide-default-footer
          item-value="id"
          @update:selection="updateSelected"
        ></v-data-table-virtual>
        <v-card class="mb-6" elevation="1" dense>
          <v-row dense>
            <v-col cols="4">
              <v-btn @click="removeSelected" >Remove selected</v-btn>
            </v-col>


            <v-col cols="4">
              <v-card-title>Total</v-card-title>
            </v-col>
            <v-col cols="auto">
              <v-card-subtitle> TODODODODO </v-card-subtitle>
            </v-col>

            <v-col cols="8"></v-col>
          </v-row>
        </v-card>
      </v-card>
      <v-card-subtitle> Add storage </v-card-subtitle>
      <v-col cols="auto">
        <v-btn icon="mdi-plus" size="small"></v-btn>
      </v-col>
    </v-card>
  </v-sheet>
</template>

<style scoped>
.lab-card {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
