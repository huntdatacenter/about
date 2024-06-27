<script lang="ts">
export default {
  name: "LabCard",
  emits:['updateStorage','updateCompute'],
  props: {
    title: { type: String, required: true, default: "Lab " },
    computePrices: { type: Array, default: () => [] },
    gpuPrices: { type: Array, default: () => [] },
    machines: { type: Array, default: () => [] },
    availableGpus: { type: Array, default: () => [] },
  },
  data() {
    return {
      /* These are the variables used to manage the compute machines */
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
      computeLabSum: {cpu_count: 0.0, ram: 0.0, price: 0.0},

      /* These are the variables used to manage the storage */
      storageId: 0,
      isStorageModalOpen: false,
      datasetStorage: [],
      selectedStorage: [],
      isInitializingStoragePrices: false,
      storageHeaders: [
        { title: "Name", align: "start", sortable: true, key: "name" },
        { title: "Usage", align: "start", sortable: true, key: "usage"},
        { title: "Type", align: "start", sortable: true, key: "type" },
        { title: "Size [GB]", align: "start", sortable: true, key: "size" },
      ],
      storageLabSum: {
        size: 0.0, 
        Type: null
      }
    }
  },

  methods: {
    updateLabSum() {
      this.computeLabSum.cpu_count = this.datasetCompute.reduce((acc, item) => acc + item.core_count, 0)
      this.computeLabSum.ram = this.datasetCompute.reduce((acc, item) => acc + item.ram, 0)
      this.computeLabSum.price = this.datasetCompute.reduce((acc, item) => acc + item.price, 0)
      console.log(this.computeLabSum.price)
      this.$emit('updateCompute', 
        {
          price: this.computeLabSum.price,
          numCompute: this.datasetCompute.length || 0,
        }
      )
    },
    updateLabSumStorage() {
      this.storageLabSum.size = this.datasetStorage.reduce((acc, item) => acc + item.size, 0)
      this.$emit('updateStorage', 
        {
          size: this.storageLabSum.size
        }
      )
    },

    addMachine() {
      this.isComputeModalOpen = true
    },  
    addStorage() {
      this.isStorageModalOpen = true
    },
    closeComputeModal(payload: any) {
      if (payload) {
        this.computeId = this.computeId + 1
        this.datasetCompute.push(payload)
        this.updateLabSum()
      }
      this.isComputeModalOpen = false

    },
    closeStorageModal(payload: any) {
      if (payload) {
        this.storageId = this.storageId + 1
        this.datasetStorage.push(payload)
        this.updateLabSumStorage()
      }
      this.isStorageModalOpen = false
    },
    removeSelectedCompute() {
        if (this.selectedCompute.length === 0) {
          return
        }
        for (let i = 0; i < this.selectedCompute.length; i++) {
          this.datasetCompute = this.datasetCompute.filter(item => {
            return item['id'] !== this.selectedCompute[i]
          })
          }
        this.updateLabSum()
        this.selectedCompute = []
    },
    //remember to emit the updateStorage event

    removeSelectedStorage() {
        if (this.selectedStorage.length === 0) {
          return
        }
        for (let i = 0; i < this.selectedStorage.length; i++) {
          this.datasetStorage = this.datasetStorage.filter(item => {
            return item['id'] !== this.selectedStorage[i]
          })
          }
        this.updateLabSumStorage()
        this.selectedStorage = []
    },
    getTotalSize() {
      return 1
    },

  },
  created() {},
  
}
</script>

<template>
  <v-container>
  <v-sheet class="lab-card">
    <v-card class="ma-0">
      <v-card-title>{{ title }}</v-card-title>
      <v-card>
        <v-card-title> Compute</v-card-title>
      <v-card-subtitle> {{ "Add a machine to " + title}}</v-card-subtitle>

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

        <v-data-table-virtual
          v-model="selectedCompute"
          :items="datasetCompute"
          :headers="computeHeaders"
          :loading="isInitializingComputePrices"
          show-select
          hover
          hide-default-footer
          item-value="id"
        >
      <template v-slot:body.append="{}" v-if="this.computeLabSum['price'] !== 0">
        <tr>
          <th role="columnheader" class="pt-4 pb-2">
          <span><strong>Total</strong> </span>
          </th>
          <th></th>
          <th></th>
          <th>  <strong>{{ this.computeLabSum['cpu_count'] }}</strong></th>
          <th>  <strong> {{ this.computeLabSum['ram'] }}</strong></th>
          <th></th>
          <th></th>
          <th>  <strong>{{ this.computeLabSum['price'] + ' kr'}} </strong></th>
        </tr>
      </template>
      </v-data-table-virtual>
            <v-col cols="4">
              <v-btn @click="removeSelectedCompute" >Remove selected</v-btn>
            </v-col>
        </v-card>
        <v-card>
          
        <v-card-title> Storage</v-card-title>
        <v-card-subtitle> Add storage to {{ title }} </v-card-subtitle>
      <v-col cols="auto">
        <v-btn icon="mdi-plus" size="small" @click="addStorage"></v-btn>
      </v-col>
      <v-data-table-virtual
        v-model="selectedStorage"
        :items="datasetStorage"
        :headers="storageHeaders"
        :loading="isInitializingStoragePrices"
        show-select
        hover
        hide-default-footer
        item-value="id"
      >
      <template v-slot:body.append="{}" v-if="this.storageLabSum['size'] !== 0">
        <tr>
          <th role="columnheader" class="pt-4 pb-2">
          <span><strong>Total</strong> </span>
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th>  <strong>{{ this.storageLabSum['size'] + ' GB'}}</strong></th>

        </tr>
      </template>
    </v-data-table-virtual>
    <v-col cols="4">
              <v-btn @click="removeSelectedStorage" >Remove selected</v-btn>
            </v-col>
      </v-card>
    </v-card>
  </v-sheet>
  <Storage
        v-if="isStorageModalOpen"
        :storage-id="storageId"
        @close="closeStorageModal"
      />
  </v-container>
</template>

<style scoped>
.lab-card {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
