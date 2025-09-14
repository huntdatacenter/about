<script>
export default {
  /*
  * This vue component is used to add a new compute machine to the specific lab.
  **/


  name: 'Machine',
  props: {
    computeId: { type: Number, default: () => 0 },
    flavors: { type: Array, default: () => [] },
    gpus: { type: Array, default: () => [] },
    machines: { type: Array, default: () => [] },
    availableGpus: { type: Array, default: () => [] },
    selectedRadio: { type: String, default: "1Y" },
  },

  emits: ["close", "open-snackbar"],

  data() {
    return {
    formData: {
      id: null,
      name: null,
      flavor: null,
      gpu: null,
      subscription: null,
    },
    overlay: true,
    /* This subscriptions are used to translate into the correct subscription type in the api */
    subscriptions: [
      { text: "Commitment", value: "COMMITMENT" },
      { text: "On demand", value: "ONDEMAND" },
      { text: "Spot", value: "SPOT" },
    ],
  };
  },

  computed: {
    getPeriod() {
      return this.formData.flavor && this.formData.subscription
        ? this.periods[this.formData.subscription]
        : null;
    },

    //Lurer på om jeg skal endre denne til å bli noe som getFlavor som henter ut det itemet, så kan jeg bruke den rundt om kring i koden
    getComputePriceYear() {
      if (!this.formData.flavor && !this.formData.subscription) {
        return 0;
      }
      const price = this.flavors.find(
        (item) => item["service.unit"] === this.formData.flavor && item["service.level"] === this.formData.subscription)
      return price ? parseInt(price["price.nok.ex.vat"]).toFixed(2) : 0;
    },
    getComputePriceMonth() {
      return parseFloat(this.getComputePriceYear / 12).toFixed(2);
    },


    // Litt bugs her med SPOT og ONDEMAND
    getGpuPrice() {
      if (!this.formData.flavor && !this.formData.subscription) {
        return 0;
      }
      const price = this.gpus.find(
        (item) => item["service.unit"] === this.formData.gpu && item["service.level"] === this.getGpuSubscription)

      return price ? parseFloat(price["price.nok.ex.vat"]).toFixed(2) : 0;
    },
    getGpuSubscription() {
      // NOTE GPU does not have spot subscription hence taken as on demand in case spot is selected for compute
      return this.formData.subscription
        ? this.formData.subscription.replace("SPOT", "ONDEMAND")
        : this.formData.subscription;
    },
    getGpuMonthPrice() {
      return parseFloat(this.getGpuPrice / 12).toFixed(2);
    },
    getFlavors() {
      if (!this.formData.subscription) {
        return [];
      }
      return this.machines.filter((item) => item)
    },
    getGpus() {
      return this.availableGpus.map((item) => {
          return{
            title: item["type"] + " - " + item["ram"] + "GB",
            value: item["type"],
            };
          }
      );
    },
  },

  created() {
    this.formData.id = this.computeId;
    this.formData.name = `machine-${this.computeId}`;
  },

  methods: {
    getSummedPrice(num1, num2) {
      return (parseFloat(num1) + parseFloat(num2)).toFixed(0);
    },
    close() {
      this.$emit("close");
    },
    save() {
      if (!this.formData.flavor) {
        console.log("No machine type selected");
        this.$emit("open-snackbar", "No machine type selected");
        return;
      }

      const name = this.formData.gpu
        ? `${this.formData.name} (incl. GPU)`
        : this.formData.name;

      let monthlyPrice = this.getSummedPrice(this.getComputePriceMonth, this.getGpuMonthPrice);
      let yearlyPrice = this.getSummedPrice(this.getComputePriceYear, this.getGpuPrice);
      /* Splitting up the "default.b3 - 8 CPUs / 16 GB RAM" to get number of CPUs and GB of RAM**/
      const machinetitle = this.machines.filter((item) => item["value"] === this.formData.flavor)[0]["title"].split(" - ")[1].split(" / ")
      const core_count = parseInt(machinetitle[0].split(" ")[0])
      const ram = parseInt(machinetitle[1].split(" ")[0])
      const flavorWithGpu = this.formData.gpu ? this.formData.flavor + " + " + this.formData.gpu : this.formData.flavor;
      this.$emit("close", {
        id: this.formData.id,
        name: name,
        flavor: this.formData.flavor ? flavorWithGpu: null,
        gpu: this.formData.gpu ? this.formData.gpu : null,
        core_count: core_count,
        ram: ram,
        monthlyPrice: monthlyPrice,
        yearlyPrice: yearlyPrice,
        type: this.formData.subscription,
      });
    },
  },
};
</script>

<template>
  <v-overlay v-model="overlay" class="d-flex justify-center align-center">
    <v-card max-width="600px" min-width="600px" light>
      <v-card-title>
        <span class="text-h5">Add Compute</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="formData.name"
                label="Name"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="formData.subscription"
                :items="subscriptions"
                item-title="text"
                item-value="value"
                label="Subscription type"
                required
                outlined
              >

            </v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="formData.flavor"
                :items="getFlavors"
                label="Machine type"
                outlined
                required
                :disabled="!formData.subscription"
              >
                <template #item="{ item, props }">
                    <VDivider v-if="'divider' in item.raw" />
                    <VListSubheader v-else-if="'header' in item.raw" :title="item.raw.header"/>
                    <VListItem v-else v-bind="props" :title="item.title" :value="item.value"/>
                  </template>
            </v-autocomplete>
              <!-- Fortsett her neste gang. item Titlte. -->
            </v-col>
            <v-col v-show="formData.flavor" cols="12" sm="6">
              <v-text-field
                v-model="getComputePriceMonth"
                label="Compute Price / Month"
                suffix="NOK ex. VAT"
                readonly
                outlined
              ></v-text-field>
            </v-col>
            <v-col v-show="formData.flavor" cols="12" sm="6">
              <v-text-field
                v-model="getComputePriceYear"
                label="Compute Price / Year"
                suffix="NOK ex. VAT / Year"
                readonly
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="formData.gpu"
                :items="getGpus"
                label="GPU type (optional)"
                outlined
                clearable
                :disabled="!formData.subscription"
              ></v-select>
            </v-col>
            <v-col v-show="formData.gpu" cols="12" sm="6">
              <v-text-field
                v-model="getGpuMonthPrice"
                label="GPU Price / Month"
                suffix="NOK ex. VAT"
                readonly
                outlined
              ></v-text-field>
            </v-col>
            <v-col v-show="formData.gpu" cols="12" sm="6">
              <v-text-field
                v-model="getGpuPrice"
                label="GPU Price / Year"
                suffix="NOK ex. VAT / Year"
                readonly
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-2" text @click="close()"> Close </v-btn>
        <v-btn color="green darken-2" text @click="save()"> Save </v-btn>
      </v-card-actions>
    </v-card>

  </v-overlay>
</template>
