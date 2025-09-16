<script>
export default {
  name: "TotalBlock",
  props: {
    totalItems: { type: Array, default: () => [] },
    sumInTotal: { type: Number, default: 0.0 },
  },

  data() {
    return {
      totalHeaders: [
        { title: "Name", align: "start", sortable: true, key: "name" },
        { title: "Total units", align: "start", sortable: true, key: "units" },
        { title: "Price", align: "start", sortable: true, key: "price" },
      ],
      datasetStorage: [],
      totalPrice: 0.0,
      commitmentPrice: 0.0,
      onDemandPrice: 0.0,
    }
  },
  watch: {},

  methods: {},
}
</script>

<template>
  <v-sheet class="lab-card">
    <v-card class="ma-0 pa-4">
      <v-card-title> Total</v-card-title>
      <v-data-table-virtual
        v-model="datasetStorage"
        :items="totalItems"
        :headers="totalHeaders"
        hover
        hide-default-footer
        item-value="id"
      >
      </v-data-table-virtual>
      <v-row dense>
        <v-col cols="5"> </v-col>
        <v-col cols="7">
          <v-list dense>
            <v-list-item>
              <v-list-item-title> <strong> Estimated total price: </strong></v-list-item-title>
              <v-list-item-subtitle class="align-end"> {{ this.sumInTotal }} NOK ex. VAT / Year </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </v-sheet>
</template>

<style scoped>
/* Your component styles go here */
.lab-card {
  width: 94%;
  margin: auto;
}

.v-card {
  background-color: #f5f5f5;
}
</style>
