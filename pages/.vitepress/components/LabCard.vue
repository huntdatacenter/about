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
    selectedRadio: { type: String, default: "1Y" },
  },
  data() {
    return {
      /* These are the variables used to manage the compute machines */
      computeId: 0,
      isComputeModalOpen: false,
      //Add a default entry to datasetCompute with name, flavor, core_count, ram, type, period, price
      datasetCompute: [],
      selectedCompute: [],
      isInitializingComputePrices: false,
      computeHeaders: [
        { title: "Name", align: "start", sortable: true, key: "name" },
        { title: "Machine type", align: "start", sortable: true, key: "flavor" },
        { title: "cpu cores", align: "start", sortable: true, key: "core_count" },
        { title: "Memory [TB]", align: "start", sortable: true, key: "ram" },
        { title: "Type", align: "start", sortable: true, key: "type" },
        { title: "Price / month", align: "start", sortable: true, key: "monthlyPrice" },
        { title: "Price / year", align: "start", sortable: true, key: "yearlyPrice", },
      ],
      totalPriceItems: 0.0,
      computeLabSum: {monthlyPrice: 0.0, yearlyPrice: 0.0, ram: 0, cpu_count: 0},

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
        { title: "Size [TB]", align: "start", sortable: true, key: "size" },
      ],
      storageLabSum: {
        size: 0.0, 
        Type: null
      },
      snackbar: {
        show: false,
        message: "",
      },
    }
  },


  methods: {
    updateLabSum() {
      this.computeLabSum.monthlyPrice = (this.datasetCompute.reduce((acc, item) => parseFloat(acc) + parseFloat(item.monthlyPrice), 0)).toFixed(0)
      this.computeLabSum.yearlyPrice = (this.datasetCompute.reduce((acc, item) => parseFloat(acc) + parseFloat(item.yearlyPrice), 0)).toFixed(0)
      this.computeLabSum.ram = this.datasetCompute.reduce((acc, item) => acc + item.ram, 0)
      this.computeLabSum.cpu_count = this.datasetCompute.reduce((acc, item) => acc + item.core_count, 0)
      this.$emit('updateCompute', 
        {
          monthlyPrice: this.computeLabSum.monthlyPrice,
          yearlyPrice: this.computeLabSum.yearlyPrice,
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
        this.pushDefaultStorage()
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
    openSnackbar(message: string) {
      this.snackbar.message = message
      this.snackbar.show = true
    },

    removeSelectedCompute() {
        if (this.selectedCompute.length === 0) {
          this.selectedCompute = []
          return
        }
        for (let i = 0; i < this.selectedCompute.length; i++) {
          if (this.selectedCompute[i] === 0) {
            this.openSnackbar("Cannot remove the default machine")
            continue
          }
          else (
            this.datasetCompute = this.datasetCompute.filter(item => {
              return item['id'] !== this.selectedCompute[i]
            })
          )

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
    pushDefaultComputeUnit() {
      let defaultUnit = this.computePrices.find(item => item["service.unit"] === "default.c2" && item["service.level"] === "COMMITMENT" && item['service.commitment'] === "1Y")
      const machinetitle = this.machines.filter((item) => item["value"] === defaultUnit['service.unit'])[0]["title"].split(" - ")[1].split(" / ") 
      const core_count = parseInt(machinetitle[0].split(" ")[0])
      const ram = parseInt(machinetitle[1].split(" ")[0])
        this.datasetCompute.push(
      {
        id: this.computeId,
        name: "machine-0",
        flavor: defaultUnit["service.unit"],
        core_count: core_count,
        ram: ram,
        type: "COMMITMENT",
        period: "1 Years",
        monthlyPrice: defaultUnit["price.nok.ex.vat"] /12,
        yearlyPrice: defaultUnit["price.nok.ex.vat"],
      }
    ) 
      this.computeId +=1
    },
    pushDefaultStorage(){
      let defaultStorage = {
        id: this.storageId,
        name: "volume-" + this.storageId,
        usage: "Archive",
        type: "HDD",
        size: 1,
      }
      this.datasetStorage.push(defaultStorage)
      this.storageId += 1
    }

  },
  created() {
    this.pushDefaultComputeUnit()
    this.pushDefaultStorage();
    this.updateLabSum()
  },

  
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
        :selected-radio="selectedRadio"
        @close="closeComputeModal"
        @open-snackbar="openSnackbar"
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
      <template v-slot:body.append="{}" v-if="this.computeLabSum.yearlyPrice !== 0">
        <tr>
          <th role="columnheader" class="pt-4 pb-2">
          <span><strong>Total</strong> </span>
          </th>
          <th></th>
          <th></th>
          <th>  <strong>{{ this.computeLabSum.cpu_count }}</strong></th>
          <th>  <strong> {{ this.computeLabSum.ram }}</strong></th>
          <th></th>
          <th> <strong>{{ this.computeLabSum.monthlyPrice + ' kr'}} </strong></th>
          <th>  <strong>{{ this.computeLabSum.yearlyPrice + ' kr'}} </strong></th>
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
        <v-card-subtitle> Each compute unit needs a volume of storage of atleast 1 TB</v-card-subtitle>
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
          <th>  <strong>{{ this.storageLabSum['size'] + ' TB'}}</strong></th>

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
    <v-snackbar v-model="snackbar.show"> {{ snackbar.message }}</v-snackbar>
  </v-container>
</template>

<style scoped>
.lab-card {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
