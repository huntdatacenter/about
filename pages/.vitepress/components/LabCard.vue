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
    storagePrices: { type: Array, default: () => [] },
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
        { title: "Price", align: "start", sortable: true, key: "price" },
      ],
      storageLabSum: {
        size: 0.0, 
        type: null,
        price: 0.0,
      },
      snackbar: {
        show: false,
        message: "",
      },
    }
  },
  computed: {
    displayStorageSumPrice() {
      return this.storageLabSum.price.toFixed(0) + " kr"
    },
    displayDatasetStorage() {
      return this.datasetStorage.map(item => {
        return {
          id: item.id,
          name: item.name,
          usage: item.usage,
          type: item.type,
          size: item.size + " TB",
          price: item.price.toFixed(0) + " kr",
        }
      })
    },

  },


  methods: {
    

    updateLabSum() {
      this.computeLabSum.monthlyPrice = (this.datasetCompute.reduce((acc, item) => parseFloat(acc) + parseFloat(item.monthlyPrice), 0))
      this.computeLabSum.yearlyPrice = (this.datasetCompute.reduce((acc, item) => parseFloat(acc) + parseFloat(item.yearlyPrice), 0))
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

      this.updateAddedStorage()
      this.storageLabSum.price = this.datasetStorage.reduce((acc, item) => acc + item.price, 0)

      this.$emit('updateStorage', 
        {
          size: this.storageLabSum.size,
          price: this.storageLabSum.price
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
        if (this.datasetCompute.length > this.datasetStorage.length) {
            this.pushDefaultStorage()
        }
      }
      this.isComputeModalOpen = false

    },
    closeStorageModal(payload: any) {
      if (payload) {
        this.storageId = this.storageId + 1
        let price = this.calculateStoragePriceForVolume(payload.size, true)
        this.datasetStorage.push(
          {
            id: this.storageId,
            name: payload.name,
            usage: payload.usage,
            type: payload.type,
            size: payload.size,
            price: price,
          }
        )
        this.updateAddedStorage()
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
          else {
            this.datasetCompute = this.datasetCompute.filter(item => {
              return item['id'] !== this.selectedCompute[i]
            })
          }
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
        price: 0, //price is zero, because it will be updated later, after calculating the total storage
      }

      this.datasetStorage.push(defaultStorage)
      //need to update all the existing storages, except the last one added. 
      this.storageId += 1
      this.updateLabSumStorage()
    },
    updateAddedStorage() {
      this.datasetStorage.forEach((item, index) => {
        let price = this.calculateStoragePriceForVolume(item.size)
        item.price = price
      })
    },

    calculateStoragePriceForVolume(volumeSize: number) {
      let fraction = volumeSize / this.storageLabSum.size
      this.calculateTotalStoragePrice()
      return fraction * this.totalStoragePrice
    },
    
    
    calculateTotalStoragePrice() {

      let totalStorageSize = this.storageLabSum.size
      this.totalStoragePrice = this.storageCost(totalStorageSize)
    },
    storageCost(totalSize) {
      totalSize = parseFloat(totalSize)
      let level1 = this.storagePrices.find(item => {
        return item["service.commitment"] === "1Y" && item["service.unit"] === "First 10 TB"})
      level1 = level1["price.nok.ex.vat"]
      let level2 = this.storagePrices.find(item => item["service.commitment"] === "1Y" && item["service.unit"] === "Next 90 TB")
      level2 = level2["price.nok.ex.vat"]
      let level3 = this.storagePrices.find(item => item["service.commitment"] === "1Y" && item["service.unit"] === "Over 100 TB")
      level3 = level3["price.nok.ex.vat"]
      // Different equation used if total size is below 10 TB / 10 < totalSize <= 100 / above 100 TB
      let price
      //create a bunch of console log which will help you debug the issue


      if (totalSize <= 10) {
        price = parseFloat(level1) * totalSize

      } else if (totalSize > 10 && totalSize <= 100) {
        price = parseFloat(level1) * 10 + parseFloat(level2) * (totalSize - 10)
      } else if (totalSize > 100) {
        price = parseFloat(level1) * 10 + parseFloat(level2) * 90 + parseFloat(level3) * (totalSize - 100)

      }
      return price
    },
  },
  
  created() {
    this.pushDefaultComputeUnit();
    this.pushDefaultStorage();
    this.updateLabSum();
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
        :items="displayDatasetStorage"
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
          <th>  <strong>{{ this.storageLabSum.size + ' TB'}}</strong></th>
          <th><strong> {{ this.displayStorageSumPrice }}</strong></th>
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
